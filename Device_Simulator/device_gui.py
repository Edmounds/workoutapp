import tkinter as tk
from tkinter import ttk, messagebox, simpledialog
import mysql.connector
import pymongo
import random
import string
import hashlib
import uuid
from datetime import datetime, timedelta, date
from ttkthemes import ThemedTk
import math
import threading

class DeviceSimulatorGUI:
    def __init__(self, root):
        self.root = root
        self.root.title("智能设备数据模拟器")
        self.root.minsize(850, 650) # 设置最小尺寸以保证UI布局
        
        # 设置Material风格
        self.colors = {
            "primary": "#4C98FF",
            "secondary": "#7B1FA2",
            "background": "#121212",
            "surface": "#1E1E1E",
            "text": "#FFFFFF",
            "accent": "#03DAC6",
            "error": "#CF6679",
            "success": "#4CAF50"
        }
        
        self.root.configure(bg=self.colors["background"])
        
        # 数据库配置
        self.mysql_config = {
            'host': '113.45.220.0',
            'port': 3306,
            'user': 'cxr',
            'password': 'Chenqichen666',
            'database': 'workout_app'
        }
        
        # MongoDB配置
        self.mongo_config = {
            'host': '113.45.220.0',
            'port': 27017,
            'username': 'cxr',
            'password': 'Chenqichen666',
            'database': 'workout_app'
        }
        
        # 创建主框架
        self.create_main_ui()
        
        # 设备列表
        self.devices = []
        
        # 启动时自动加载设备
        self.load_devices()

    def create_main_ui(self):
        # 配置根窗口的grid布局权重，实现响应式
        self.root.grid_rowconfigure(1, weight=1)
        self.root.grid_columnconfigure(1, weight=1)

        # 顶部标题
        title_frame = tk.Frame(self.root, bg=self.colors["surface"])
        title_frame.grid(row=0, column=0, columnspan=2, sticky="ew", padx=10, pady=10)
        
        title_label = tk.Label(title_frame, text="智能手环设备管理系统", 
                               font=("Arial", 18, "bold"), 
                               bg=self.colors["surface"], fg=self.colors["text"])
        title_label.pack(pady=10)
        
        # 左侧面板 - 创建设备
        self.left_panel = tk.Frame(self.root, bg=self.colors["surface"], 
                                  width=300, bd=0, highlightthickness=0)
        self.left_panel.grid(row=1, column=0, sticky="ns", padx=(10, 5), pady=(0, 10))
        self.left_panel.grid_propagate(False) # 防止左侧面板在窗口缩放时改变大小
        
        # 右侧面板 - 显示设备列表
        self.right_panel = tk.Frame(self.root, bg=self.colors["surface"], 
                                   bd=0, highlightthickness=0)
        self.right_panel.grid(row=1, column=1, sticky="nsew", padx=(5, 10), pady=(0, 10))
        
        # 创建左侧面板内容
        self.create_left_panel()
        
        # 创建右侧面板内容
        self.create_right_panel()

    def create_left_panel(self):
        # 批量创建设备
        tk.Label(self.left_panel, text="批量创建设备", font=("Arial", 14, "bold"), 
                bg=self.colors["surface"], fg=self.colors["text"]).pack(pady=(20, 10))
        
        # 设备数量输入框
        input_frame = tk.Frame(self.left_panel, bg=self.colors["surface"])
        input_frame.pack(fill="x", pady=10, padx=20)
        
        tk.Label(input_frame, text="设备数量:", bg=self.colors["surface"], 
                fg=self.colors["text"]).pack(side="left")
        
        self.device_count_var = tk.StringVar(value="5")
        self.device_count_entry = tk.Entry(input_frame, textvariable=self.device_count_var, 
                                          width=10, bg=self.colors["background"], 
                                          fg=self.colors["text"], insertbackground=self.colors["text"])
        self.device_count_entry.pack(side="left", padx=10)
        
        # 设备类型
        type_frame = tk.Frame(self.left_panel, bg=self.colors["surface"])
        type_frame.pack(fill="x", pady=10, padx=20)
        
        tk.Label(type_frame, text="设备类型:", bg=self.colors["surface"], 
                fg=self.colors["text"]).pack(side="left")
        
        self.device_type_var = tk.StringVar(value="Wristband")
        device_types = ["Wristband", "Watch", "Tracker"]
        
        self.device_type_menu = ttk.Combobox(type_frame, textvariable=self.device_type_var, 
                                            values=device_types, state="readonly", width=15)
        self.device_type_menu.pack(side="left", padx=10)
        
        # 设备名称前缀
        prefix_frame = tk.Frame(self.left_panel, bg=self.colors["surface"])
        prefix_frame.pack(fill="x", pady=10, padx=20)
        
        tk.Label(prefix_frame, text="设备名称前缀:", bg=self.colors["surface"], 
                fg=self.colors["text"]).pack(side="left")
        
        self.device_prefix_var = tk.StringVar(value="FitBand")
        self.device_prefix_entry = tk.Entry(prefix_frame, textvariable=self.device_prefix_var, 
                                          width=15, bg=self.colors["background"], 
                                          fg=self.colors["text"], insertbackground=self.colors["text"])
        self.device_prefix_entry.pack(side="left", padx=10)
        
        # 批量创建按钮
        create_btn = tk.Button(self.left_panel, text="批量创建设备", bg=self.colors["primary"], 
                              fg=self.colors["text"], bd=0, padx=20, pady=10, 
                              activebackground=self.colors["accent"],
                              command=self.create_multiple_devices)
        create_btn.pack(pady=15)
        
        # 分隔线
        separator = ttk.Separator(self.left_panel, orient="horizontal")
        separator.pack(fill="x", pady=20)
        
        # 创建用户相关
        tk.Label(self.left_panel, text="用户管理", font=("Arial", 14, "bold"), 
                bg=self.colors["surface"], fg=self.colors["text"]).pack(pady=(10, 5))
        
        # 自动创建用户
        auto_user_btn = tk.Button(self.left_panel, text="为选中设备自动创建用户", 
                                  bg=self.colors["secondary"], fg=self.colors["text"], 
                                  bd=0, padx=10, pady=8, activebackground=self.colors["accent"],
                                  command=self.auto_create_user)
        auto_user_btn.pack(pady=10)
        
        # 手动指定用户
        manual_user_btn = tk.Button(self.left_panel, text="为选中设备绑定现有用户", 
                                    bg=self.colors["secondary"], fg=self.colors["text"], 
                                    bd=0, padx=10, pady=8, activebackground=self.colors["accent"],
                                    command=self.bind_existing_user)
        manual_user_btn.pack(pady=10)
        
        # 解绑用户
        unbind_btn = tk.Button(self.left_panel, text="解绑选中设备", 
                              bg=self.colors["error"], fg=self.colors["text"], 
                              bd=0, padx=10, pady=8, activebackground="#B00020",
                              command=self.unbind_device)
        unbind_btn.pack(pady=10)
        
        # 数据生成
        tk.Label(self.left_panel, text="批量数据生成", font=("Arial", 14, "bold"), 
                bg=self.colors["surface"], fg=self.colors["text"]).pack(pady=(10, 5))

        # Batch settings frame
        batch_frame = tk.Frame(self.left_panel, bg=self.colors["surface"])
        batch_frame.pack(fill="x", pady=5, padx=20)
        batch_frame.columnconfigure(1, weight=1)

        # Number of batches
        tk.Label(batch_frame, text="生成批次数量:", bg=self.colors["surface"], 
                fg=self.colors["text"]).grid(row=0, column=0, sticky="w", pady=2)
        self.num_batches_var = tk.StringVar(value="10")
        self.num_batches_entry = tk.Entry(batch_frame, textvariable=self.num_batches_var, 
                                          width=10, bg=self.colors["background"], 
                                          fg=self.colors["text"], insertbackground=self.colors["text"])
        self.num_batches_entry.grid(row=0, column=1, sticky="w", pady=2)

        # Days range
        tk.Label(batch_frame, text="分布天数范围:", bg=self.colors["surface"], 
                fg=self.colors["text"]).grid(row=1, column=0, sticky="w", pady=2)
        self.days_range_var = tk.StringVar(value="30")
        self.days_range_entry = tk.Entry(batch_frame, textvariable=self.days_range_var, 
                                          width=10, bg=self.colors["background"], 
                                          fg=self.colors["text"], insertbackground=self.colors["text"])
        self.days_range_entry.grid(row=1, column=1, sticky="w", pady=2)

        generate_single_btn = tk.Button(self.left_panel, text="为选中设备批量生成数据", 
                                        bg=self.colors["success"], fg=self.colors["text"], 
                                        bd=0, padx=10, pady=8, activebackground=self.colors["accent"],
                                        command=self.batch_generate_for_selected_thread)
        generate_single_btn.pack(pady=10, fill="x", padx=20)
        
        generate_all_btn = tk.Button(self.left_panel, text="一键为所有设备批量生成", 
                                     bg=self.colors["success"], fg=self.colors["text"], 
                                     bd=0, padx=10, pady=8, activebackground=self.colors["accent"],
                                     command=self.batch_generate_for_all_thread)
        generate_all_btn.pack(pady=10, fill="x", padx=20)
        
        # 状态消息
        self.status_var = tk.StringVar()
        status_label = tk.Label(self.left_panel, textvariable=self.status_var, 
                               bg=self.colors["surface"], fg=self.colors["accent"],
                               wraplength=250)
        status_label.pack(pady=20)

    def create_right_panel(self):
        # 配置右侧面板的grid布局，使其内部控件能够自适应
        self.right_panel.grid_rowconfigure(1, weight=1)
        self.right_panel.grid_columnconfigure(0, weight=1)

        # 设备列表标题
        tk.Label(self.right_panel, text="设备列表", font=("Arial", 14, "bold"), 
                bg=self.colors["surface"], fg=self.colors["text"]).grid(row=0, column=0, sticky="w", pady=(10, 5), padx=10)
        
        # 创建表格框架
        table_frame = tk.Frame(self.right_panel, bg=self.colors["background"])
        table_frame.grid(row=1, column=0, sticky="nsew", padx=10, pady=5)
        table_frame.grid_rowconfigure(0, weight=1)
        table_frame.grid_columnconfigure(0, weight=1)
        
        # 创建表格
        columns = ("id", "device_id", "device_name", "device_type", "status", "user_id", "created_at")
        self.tree = ttk.Treeview(table_frame, columns=columns, show="headings", 
                                 selectmode="browse", height=20)
        
        # 定义列
        self.tree.heading("id", text="ID")
        self.tree.heading("device_id", text="设备ID")
        self.tree.heading("device_name", text="设备名称")
        self.tree.heading("device_type", text="设备类型")
        self.tree.heading("status", text="状态")
        self.tree.heading("user_id", text="用户ID")
        self.tree.heading("created_at", text="创建时间")
        
        # 设置列宽
        self.tree.column("id", width=40)
        self.tree.column("device_id", width=120)
        self.tree.column("device_name", width=100)
        self.tree.column("device_type", width=80)
        self.tree.column("status", width=60)
        self.tree.column("user_id", width=60)
        self.tree.column("created_at", width=150)
        
        # 添加滚动条
        scrollbar = ttk.Scrollbar(table_frame, orient="vertical", command=self.tree.yview)
        self.tree.configure(yscrollcommand=scrollbar.set)
        
        self.tree.grid(row=0, column=0, sticky="nsew")
        scrollbar.grid(row=0, column=1, sticky="ns")

        # 刷新按钮
        refresh_btn = tk.Button(self.right_panel, text="刷新设备列表", 
                               bg=self.colors["accent"], fg=self.colors["text"], 
                               bd=0, padx=10, pady=5, activebackground=self.colors["primary"],
                               command=self.load_devices)
        refresh_btn.grid(row=2, column=0, pady=10)

    def load_devices(self):
        self.status_var.set("正在加载设备列表...")
        self.root.update_idletasks()
        # 立即清空列表，给用户即时反馈
        for item in self.tree.get_children():
            self.tree.delete(item)
        
        # 在子线程中加载数据以避免UI卡顿
        threading.Thread(target=self._load_devices_task, daemon=True).start()

    def _load_devices_task(self):
        try:
            conn = mysql.connector.connect(**self.mysql_config)
            cursor = conn.cursor()
            cursor.execute("SELECT id, device_id, device_name, device_type, status, user_id, created_at FROM devices ORDER BY id DESC")
            devices = cursor.fetchall()
            
            # 使用 after 在主线程中安全地更新UI
            self.root.after(0, self._update_device_list_ui, devices)
            
        except Exception as e:
            self.root.after(0, lambda: messagebox.showerror("错误", f"加载设备列表时出错：{str(e)}"))
            self.root.after(0, lambda: self.status_var.set("加载设备失败"))
        finally:
            if 'cursor' in locals():
                cursor.close()
            if 'conn' in locals() and conn.is_connected():
                conn.close()
                
    def _update_device_list_ui(self, devices):
        self.devices = devices
        for device in devices:
            status_text = {0: "未绑定", 1: "已绑定", 2: "已禁用"}.get(device[4], "未知")
            created_time = device[6].strftime("%Y-%m-%d %H:%M:%S") if device[6] else ""
            self.tree.insert("", "end", values=(
                device[0], device[1], device[2], device[3], status_text, 
                device[5] if device[5] else "-", created_time
            ))
        self.status_var.set(f"已加载 {len(devices)} 个设备")

    def create_multiple_devices(self):
        try:
            # 获取用户输入
            try:
                count = int(self.device_count_var.get())
                if count <= 0 or count > 100:
                    messagebox.showwarning("警告", "请输入1-100之间的设备数量")
                    return
            except ValueError:
                messagebox.showwarning("警告", "请输入有效的设备数量")
                return

            device_type = self.device_type_var.get()
            name_prefix = self.device_prefix_var.get()
            
            self.status_var.set(f"开始创建 {count} 个设备...")
            self.root.update_idletasks()

            # 将数据库操作放入子线程，避免UI卡顿
            threading.Thread(target=self._create_devices_task, args=(count, device_type, name_prefix), daemon=True).start()

        except Exception as e:
            self.on_task_error(f"启动创建任务时出错: {e}")

    def _create_devices_task(self, count, device_type, name_prefix):
        try:
            conn = mysql.connector.connect(**self.mysql_config)
            cursor = conn.cursor()
            
            created_count = 0
            for i in range(count):
                today = datetime.now().strftime("%Y%m%d")
                cursor.execute("SELECT MAX(SUBSTRING(device_id, 12)) FROM devices WHERE device_id LIKE %s", (f"DEV{today}%",))
                max_seq = cursor.fetchone()[0]
                seq_num = (int(max_seq) + 1) if max_seq else 1
                device_id = f"DEV{today}{seq_num:03d}"
                secret = ''.join(random.choices(string.ascii_letters + string.digits, k=20))
                device_name = f"{name_prefix}-{seq_num:03d}"
                
                cursor.execute("""
                    INSERT INTO devices 
                    (device_id, secret, status, device_name, device_type, created_at, updated_at) 
                    VALUES (%s, %s, %s, %s, %s, NOW(), NOW())
                """, (device_id, secret, 0, device_name, device_type))
                
                created_count += 1
                # 使用 after 从子线程安全地更新UI
                self.root.after(0, lambda c=created_count: self.status_var.set(f"已创建 {c}/{count} 个设备..."))
            
            conn.commit()
            self.root.after(0, lambda: self.on_creation_complete(created_count))
            
        except Exception as e:
            self.root.after(0, lambda: self.on_task_error(f"创建设备时出错: {e}"))
        finally:
            if 'cursor' in locals():
                cursor.close()
            if 'conn' in locals() and conn.is_connected():
                conn.close()

    def on_creation_complete(self, count):
        self.load_devices()
        messagebox.showinfo("成功", f"已成功创建 {count} 个设备")
        self.status_var.set(f"已创建 {count} 个设备")

    def on_task_error(self, error_msg):
        messagebox.showerror("错误", error_msg)
        self.status_var.set("任务失败")

    def auto_create_user(self):
        # 获取选中的设备
        selected_item = self.tree.focus()
        if not selected_item:
            messagebox.showwarning("警告", "请先选择一个设备")
            return
        
        # 获取设备信息
        item_data = self.tree.item(selected_item)["values"]
        device_id, status = item_data[1], item_data[4]
        
        # 检查设备状态
        if status != "未绑定":
            messagebox.showwarning("警告", "只能为未绑定的设备创建用户")
            return
        
        try:
            # 连接MySQL
            conn = mysql.connector.connect(**self.mysql_config)
            cursor = conn.cursor()
            
            # 生成用户信息
            timestamp = int(datetime.now().timestamp())
            username = f"user_{timestamp}"
            
            # 随机生成用户资料
            gender = random.choice([0, 1, 2])
            age = random.randint(18, 60)
            height = round(random.uniform(150, 190), 2)
            weight = round(random.uniform(45, 90), 2)
            
            # 生成密码
            password = ''.join(random.choices(string.ascii_letters + string.digits, k=12))
            hashed_password = hashlib.sha256(password.encode()).hexdigest()
            
            # 创建用户
            cursor.execute("""
                INSERT INTO users 
                (username, gender, age, height, weight, level, password, email, created_at, updated_at) 
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, NOW(), NOW())
            """, (username, gender, age, height, weight, "beginner", hashed_password, f"{username}@example.com"))
            
            # 获取用户ID
            user_id = cursor.lastrowid
            
            # 绑定设备
            cursor.execute("""
                UPDATE devices 
                SET user_id = %s, status = 1, updated_at = NOW() 
                WHERE device_id = %s
            """, (user_id, device_id))
            
            # 提交事务
            conn.commit()
            
            # 更新设备列表
            self.load_devices()
            
            # 显示成功消息
            messagebox.showinfo("成功", f"已成功创建用户 {username} (ID: {user_id}) 并绑定设备 {device_id}\n初始密码: {password}")
            self.status_var.set(f"已创建用户 {username} (ID: {user_id})")
            
        except Exception as e:
            messagebox.showerror("错误", f"创建用户时出错：{str(e)}")
            self.status_var.set("创建用户失败")
        finally:
            if 'cursor' in locals():
                cursor.close()
            if 'conn' in locals():
                conn.close()

    def bind_existing_user(self):
        # 获取选中的设备
        selected_item = self.tree.focus()
        if not selected_item:
            messagebox.showwarning("警告", "请先选择一个设备")
            return
        
        # 获取设备信息
        item_data = self.tree.item(selected_item)["values"]
        device_id, status = item_data[1], item_data[4]
        
        # 检查设备状态
        if status != "未绑定":
            messagebox.showwarning("警告", "只能为未绑定的设备绑定用户")
            return
        
        # 获取用户ID或用户名
        user_input = simpledialog.askstring("绑定用户", "请输入要绑定的用户ID或用户名:", 
                                           parent=self.root)
        
        if not user_input:
            return
        
        try:
            # 连接MySQL
            conn = mysql.connector.connect(**self.mysql_config)
            cursor = conn.cursor(dictionary=True)

            # 检查用户是否存在
            if user_input.isdigit():
                cursor.execute("SELECT id, username FROM users WHERE id = %s", (int(user_input),))
            else:
                cursor.execute("SELECT id, username FROM users WHERE username = %s", (user_input,))
            
            user = cursor.fetchone()
            
            if not user:
                messagebox.showwarning("警告", f"用户 '{user_input}' 不存在")
                return
                
            user_id = user['id']
            username = user['username']

            # 绑定设备
            cursor.execute("""
                UPDATE devices 
                SET user_id = %s, status = 1, updated_at = NOW() 
                WHERE device_id = %s
            """, (user_id, device_id))
            
            # 提交事务
            conn.commit()
            
            # 更新设备列表
            self.load_devices()
            
            # 显示成功消息
            messagebox.showinfo("成功", f"已成功将设备 {device_id} 绑定到用户 {username} (ID: {user_id})")
            self.status_var.set(f"已绑定用户 {username} (ID: {user_id})")
            
        except Exception as e:
            messagebox.showerror("错误", f"绑定用户时出错：{str(e)}")
            self.status_var.set("绑定用户失败")
        finally:
            if 'cursor' in locals():
                cursor.close()
            if 'conn' in locals():
                conn.close()

    def unbind_device(self):
        # 获取选中的设备
        selected_item = self.tree.focus()
        if not selected_item:
            messagebox.showwarning("警告", "请先选择一个设备")
            return
        
        # 获取设备信息
        item_data = self.tree.item(selected_item)["values"]
        device_id, status, user_id = item_data[1], item_data[4], item_data[5]
        
        # 检查设备状态
        if status != "已绑定" or user_id == "-":
            messagebox.showwarning("警告", "该设备未绑定用户")
            return
        
        # 确认解绑
        if not messagebox.askyesno("确认", f"确定要解绑设备 {device_id} 吗?"):
            return
        
        try:
            # 连接MySQL
            conn = mysql.connector.connect(**self.mysql_config)
            cursor = conn.cursor()
            
            # 解绑设备
            cursor.execute("""
                UPDATE devices 
                SET user_id = NULL, status = 0, updated_at = NOW() 
                WHERE device_id = %s
            """, (device_id,))
            
            # 提交事务
            conn.commit()
            
            # 更新设备列表
            self.load_devices()
            
            # 显示成功消息
            messagebox.showinfo("成功", f"已成功解绑设备 {device_id}")
            self.status_var.set(f"已解绑设备 {device_id}")
            
        except Exception as e:
            messagebox.showerror("错误", f"解绑设备时出错：{str(e)}")
            self.status_var.set("解绑设备失败")
        finally:
            if 'cursor' in locals():
                cursor.close()
            if 'conn' in locals():
                conn.close()

    def batch_generate_for_selected_thread(self):
        # Get params
        try:
            num_batches = int(self.num_batches_var.get())
            days_range = int(self.days_range_var.get())
            if not (1 <= num_batches <= 1000 and 1 <= days_range <= 365):
                messagebox.showwarning("警告", "批次数量(1-1000)和天数范围(1-365)不合法")
                return
        except ValueError:
            messagebox.showwarning("警告", "请输入有效的数字")
            return

        # Get selected device
        selected_item = self.tree.focus()
        if not selected_item:
            messagebox.showwarning("警告", "请先选择一个设备")
            return
            
        item_data = self.tree.item(selected_item)["values"]
        device_id, status, user_id = item_data[1], item_data[4], item_data[5]
        
        if status != "已绑定" or user_id == "-":
            messagebox.showwarning("警告", "请选择一个已绑定的设备")
            return
            
        self.status_var.set(f"开始为设备 {device_id} 生成 {num_batches} 批数据...")
        self.root.update()
        
        # Run in thread
        threading.Thread(target=self.run_batch_generation, args=([item_data], num_batches, days_range)).start()

    def batch_generate_for_all_thread(self):
        # Get params
        try:
            num_batches = int(self.num_batches_var.get())
            days_range = int(self.days_range_var.get())
            if not (1 <= num_batches <= 1000 and 1 <= days_range <= 365):
                messagebox.showwarning("警告", "批次数量(1-1000)和天数范围(1-365)不合法")
                return
        except ValueError:
            messagebox.showwarning("警告", "请输入有效的数字")
            return
            
        bound_devices = [self.tree.item(item)["values"] for item in self.tree.get_children() if self.tree.item(item)["values"][4] == "已绑定"]
        
        if not bound_devices:
            messagebox.showwarning("警告", "没有已绑定的设备")
            return
            
        self.status_var.set(f"开始为 {len(bound_devices)} 个设备生成 {num_batches} 批数据...")
        self.root.update()
        
        threading.Thread(target=self.run_batch_generation, args=(bound_devices, num_batches, days_range)).start()

    def run_batch_generation(self, devices_to_process, num_batches, days_range):
        total_devices = len(devices_to_process)
        for i, device_data in enumerate(devices_to_process):
            device_id, user_id = device_data[1], device_data[5]
            
            # Main status update for device
            self.root.after(0, lambda dev_id=device_id, i=i: self.status_var.set(f"({i+1}/{total_devices}) 处理设备: {dev_id}"))
            
            try:
                self.generate_complete_user_data(device_id, user_id, num_batches, days_range)
            except Exception as e:
                # Log error for the specific device and continue
                print(f"为设备 {device_id} 生成数据时出错: {e}")
                self.root.after(0, lambda dev_id=device_id: self.status_var.set(f"设备 {dev_id} 出错，跳过。"))

        self.root.after(0, lambda: self.status_var.set(f"批量生成任务完成。"))
        self.root.after(0, lambda: messagebox.showinfo("完成", f"已为 {total_devices} 个设备生成数据。"))

    def generate_complete_user_data(self, device_id, user_id, num_workouts=10, days_range=30):
        """为用户生成完整的模拟数据，确保所有表同步更新"""
        try:
            self.root.after(0, lambda: self.status_var.set(f"设备 {device_id}: 正在生成 {num_workouts} 条完整运动记录..."))
            
            # 1. 生成多个运动记录
            workout_records = []
            total_distance = 0
            total_duration = 0
            
            for i in range(num_workouts):
                # 生成随机日期和时间
                random_day = random.randint(0, days_range - 1)
                random_hour = random.randint(6, 21)
                random_minute = random.randint(0, 59)
                start_time = datetime.now() - timedelta(days=random_day, hours=random_hour, minutes=random_minute)
                
                # 生成运动数据
                duration_minutes = random.randint(20, 70)
                duration_seconds = duration_minutes * 60
                distance = random.uniform(3, 10) * 1000  # 3-10公里，转为米
                avg_pace = int(duration_seconds / (distance / 1000))  # 秒/公里
                best_pace = int(avg_pace * random.uniform(0.9, 0.98))  # 最佳配速略快于平均配速
                avg_hr = random.randint(120, 180)
                max_hr = avg_hr + random.randint(10, 25)  # 最大心率高于平均心率
                avg_step_rate = random.randint(160, 185)
                calories = int(duration_minutes * 7 + distance / 100)
                elevation_gain = round(random.uniform(0, 30), 2)
                weather = random.choice(["晴朗", "多云", "小雨", "微风", "阴天"])
                temperature = round(random.uniform(15, 30), 1)
                
                # 运动类型
                workout_types = ["跑步", "长距离跑", "间歇跑", "节奏跑", "恢复跑"]
                workout_type = random.choice(workout_types)
                
                # 添加到记录列表
                workout_records.append({
                    "workout_type": workout_type,
                    "start_time": start_time,
                    "duration": duration_seconds,
                    "distance": distance,
                    "avg_pace": avg_pace,
                    "best_pace": best_pace,
                    "avg_heart_rate": avg_hr,
                    "max_heart_rate": max_hr,
                    "avg_step_rate": avg_step_rate,
                    "calories": calories,
                    "elevation_gain": elevation_gain,
                    "weather": weather,
                    "temperature": temperature,
                    "end_time": start_time + timedelta(seconds=duration_seconds)
                })
                
                # 累加总距离和时间
                total_distance += distance / 1000  # 转为公里
                total_duration += duration_minutes
                
            self.root.after(0, lambda: self.status_var.set(f"设备 {device_id}: 正在写入数据到MySQL..."))
            
            # 2. 将运动记录写入数据库和更新用户统计
            mysql_conn = mysql.connector.connect(**self.mysql_config)
            cursor = mysql_conn.cursor()
            
            # 保存运动记录
            for record in workout_records:
                notes = f"今天的{record['workout_type']}训练，感觉{random.choice(['很棒', '一般', '还不错'])}！"
                
                cursor.execute("""
                    INSERT INTO running_records 
                    (user_id, workout_type, start_time, end_time, duration, distance, avg_pace, 
                    best_pace, avg_heart_rate, max_heart_rate, avg_step_rate, calories, elevation_gain,
                    weather, temperature, notes)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                """, (
                    user_id, record["workout_type"], record["start_time"], record["end_time"],
                    record["duration"], record["distance"], record["avg_pace"],
                    record["best_pace"], record["avg_heart_rate"], record["max_heart_rate"], 
                    record["avg_step_rate"], record["calories"], record["elevation_gain"],
                    record["weather"], record["temperature"], notes
                ))
            
            # 3. 更新用户总统计数据
            cursor.execute("""
                UPDATE users 
                SET total_workouts = total_workouts + %s, 
                    total_duration = total_duration + %s, 
                    total_distance = total_distance + %s, 
                    updated_at = NOW()
                WHERE id = %s
            """, (num_workouts, total_duration, total_distance, user_id))
            
            self.root.after(0, lambda: self.status_var.set(f"设备 {device_id}: 正在生成体能数据..."))
            
            # 4. 生成并保存体能数据
            today = datetime.now().date()
            for i in range(min(days_range, 30)):  # 最多生成30天的体能数据
                date = today - timedelta(days=i)
                
                # 生成随机体能数据
                avg_hr = random.randint(60, 80)
                current_hr = random.randint(avg_hr-5, avg_hr+5)
                rest_hr = random.randint(50, 65)
                max_hr = random.randint(140, 180)
                current_step_rate = random.randint(160, 180)
                avg_step_rate = random.randint(160, 180)
                blood_oxygen = round(random.uniform(95.0, 99.5), 1)
                current_pace = f"{random.randint(5, 8)}'{random.randint(0, 59)}\""
                health_index = random.randint(60, 95)
                stress_index = random.randint(10, 40)
                sleep_quality = random.randint(50, 95)
                sleep_duration = random.randint(360, 540)
                aerobic_capacity = random.randint(60, 90)
                weekly_distance = round(random.uniform(5, 30), 2)
                
                # 保存体能数据
                cursor.execute("""
                    INSERT INTO physical_stats 
                    (user_id, date, avg_heart_rate, current_heart_rate, resting_heart_rate, max_heart_rate,
                    current_step_rate, avg_step_rate, avg_blood_oxygen, current_pace, health_index, 
                    stress_index, sleep_quality, sleep_duration, aerobic_capacity, weekly_distance)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                    ON DUPLICATE KEY UPDATE
                    avg_heart_rate = VALUES(avg_heart_rate), 
                    current_heart_rate = VALUES(current_heart_rate),
                    resting_heart_rate = VALUES(resting_heart_rate),
                    max_heart_rate = VALUES(max_heart_rate),
                    current_step_rate = VALUES(current_step_rate),
                    avg_step_rate = VALUES(avg_step_rate),
                    avg_blood_oxygen = VALUES(avg_blood_oxygen),
                    current_pace = VALUES(current_pace),
                    health_index = VALUES(health_index), 
                    stress_index = VALUES(stress_index),
                    sleep_quality = VALUES(sleep_quality), 
                    sleep_duration = VALUES(sleep_duration),
                    aerobic_capacity = VALUES(aerobic_capacity),
                    weekly_distance = VALUES(weekly_distance)
                """, (
                    user_id, date, avg_hr, current_hr, rest_hr, max_hr,
                    current_step_rate, avg_step_rate, blood_oxygen, current_pace,
                    health_index, stress_index, sleep_quality, sleep_duration,
                    aerobic_capacity, weekly_distance
                ))
            
            self.root.after(0, lambda: self.status_var.set(f"设备 {device_id}: 正在创建进度目标..."))
            
            # 5. 为用户创建或更新进度目标
            monthly_goal = round(total_distance * 1.5, 2)  # 设置比当前总运动量高50%的目标
            deadline = today + timedelta(days=30)
            
            # 检查是否已有进度目标
            cursor.execute("SELECT id FROM progress_goals WHERE user_id = %s AND category = '距离'", (user_id,))
            goal_exists = cursor.fetchone()
            
            if goal_exists:
                # 更新现有目标
                cursor.execute("""
                    UPDATE progress_goals 
                    SET current_value = %s, target_value = %s, deadline = %s
                    WHERE user_id = %s AND category = '距离'
                """, (total_distance, monthly_goal, deadline, user_id))
            else:
                # 创建新目标
                cursor.execute("""
                    INSERT INTO progress_goals (user_id, title, current_value, target_value, category, deadline)
                    VALUES (%s, %s, %s, %s, %s, %s)
                """, (
                    user_id, '月跑量目标', total_distance, monthly_goal, '距离', deadline
                ))
            
            mysql_conn.commit()
            
            self.root.after(0, lambda: self.status_var.set(f"设备 {device_id}: 正在生成MongoDB原始数据..."))
            
            # 6. 同时生成MongoDB的原始数据以保持一致性
            self.generate_mongo_raw_data(user_id, device_id, workout_records)
            
            self.root.after(0, lambda: self.status_var.set(f"设备 {device_id}: 数据生成完成！"))
            return True
            
        except Exception as e:
            error_msg = f"生成完整用户数据时出错: {e}"
            print(error_msg)
            self.root.after(0, lambda: self.status_var.set(error_msg))
            if 'mysql_conn' in locals() and mysql_conn.is_connected():
                mysql_conn.rollback()
            return False
        finally:
            if 'cursor' in locals():
                cursor.close()
            if 'mysql_conn' in locals() and mysql_conn.is_connected():
                mysql_conn.close()

    def generate_mongo_raw_data(self, user_id, device_id, workout_records):
        """为每个运动记录生成对应的MongoDB原始数据"""
        try:
            mongo_client = pymongo.MongoClient(
                host=self.mongo_config['host'], port=self.mongo_config['port'],
                username=self.mongo_config['username'], password=self.mongo_config['password'],
                authSource='workout_app'
            )
            db = mongo_client[self.mongo_config['database']]
            
            for record in workout_records:
                start_time = record["start_time"]
                duration_seconds = record["duration"]
                end_time = record["end_time"]
                
                # 为每分钟生成一条原始数据
                duration_minutes = duration_seconds // 60
                raw_records = []
                
                base_heart_rate = random.randint(70, 85)
                base_steps = random.randint(60, 80)
                
                for m in range(duration_minutes):
                    intensity_factor = 1 + 0.5 * math.sin(m / duration_minutes * math.pi)
                    heart_rate = int(base_heart_rate + (m / (duration_minutes / 3)) * 40 * intensity_factor) if m < duration_minutes / 3 else int((base_heart_rate + 40) + random.randint(-8, 8) * intensity_factor)
                    step_count = int(base_steps + random.randint(-10, 15) * intensity_factor)
                    calories = round(step_count * random.uniform(0.04, 0.06) * intensity_factor, 2)
                    distance = round(step_count * random.uniform(0.75, 0.85) * intensity_factor, 2)
                    pace = round(random.uniform(4.5, 9.0), 2)
                    blood_oxygen = round(random.uniform(95.0, 99.9), 1)
                    temperature = round(random.uniform(36.1, 37.2), 1)
                    
                    ts = start_time + timedelta(minutes=m)
                    doc = {
                        "user_id": int(user_id), "device_id": device_id, "timestamp": ts,
                        "heart_rate": heart_rate, "step_count": step_count, "calories": calories,
                        "distance": distance, "pace": pace,
                        "elevation": round(random.uniform(-1, 2), 2),
                        "blood_oxygen": blood_oxygen,
                        "temperature": temperature,
                        "weather": record["weather"]
                    }
                    raw_records.append(doc)
                
                # 插入MongoDB
                if raw_records:
                    db.raw_records.insert_many(raw_records)
        
        except Exception as e:
            error_msg = f"生成MongoDB原始数据时出错: {e}"
            print(error_msg)
            self.root.after(0, lambda: self.log(error_msg))
        finally:
            if 'mongo_client' in locals():
                mongo_client.close()

    def log(self, message):
        print(message)

if __name__ == "__main__":
    root = ThemedTk(theme="arc")
    root.configure(bg="#121212")
    app = DeviceSimulatorGUI(root)
    root.mainloop() 