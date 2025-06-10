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
            'username': 'workout_app',
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
                for batch_num in range(num_batches):
                    # Sub-status update for batch
                    self.root.after(0, lambda dev_id=device_id, b_num=batch_num: self.status_var.set(f"设备 {dev_id}: 生成批次 {b_num+1}/{num_batches}"))

                    # Pick a random day within the specified range
                    random_day = random.randint(0, days_range - 1)
                    # Pick a random hour/minute for that day
                    random_hour = random.randint(0, 23)
                    random_minute = random.randint(0, 59)

                    # Calculate the start time for the workout
                    start_time_base = datetime.now() - timedelta(days=random_day, hours=random_hour, minutes=random_minute)
                    
                    self.generate_workout_data(device_id, user_id, start_time_base=start_time_base, update_status=False)
            except Exception as e:
                # Log error for the specific device and continue
                print(f"为设备 {device_id} 生成数据时出错: {e}")
                self.root.after(0, lambda dev_id=device_id: self.status_var.set(f"设备 {dev_id} 出错，跳过。"))

        self.root.after(0, lambda: self.status_var.set(f"批量生成任务完成。"))
        self.root.after(0, lambda: messagebox.showinfo("完成", f"已为 {total_devices} 个设备生成数据。"))

    def generate_workout_data(self, device_id, user_id, update_status=True, start_time_base=None):
        mongo_client = None
        try:
            if update_status:
                self.root.after(0, lambda: self.status_var.set(f"设备 {device_id}: 连接MongoDB..."))

            # 1. 连接MongoDB
            mongo_client = pymongo.MongoClient(
                host=self.mongo_config['host'], port=self.mongo_config['port'],
                username=self.mongo_config['username'], password=self.mongo_config['password'],
                authSource='workout_app', serverSelectionTimeoutMS=5000
            )
            db = mongo_client[self.mongo_config['database']]
            
            # 2. 生成模拟跑步数据
            duration_minutes = random.randint(20, 70)
            if start_time_base:
                start_time = start_time_base
            else:
                # Default behavior if not called from batch generation
                start_time = datetime.now() - timedelta(days=random.randint(0, 30), minutes=duration_minutes)
            end_time = start_time + timedelta(minutes=duration_minutes)
            
            if update_status:
                self.root.after(0, lambda: self.status_var.set(f"设备 {device_id}: 生成 {duration_minutes} 分钟的原始数据..."))

            docs = []
            base_heart_rate = random.randint(70, 85)
            base_steps = random.randint(60, 80)
            
            for m in range(duration_minutes):
                intensity_factor = 1 + 0.5 * math.sin(m / duration_minutes * math.pi)
                heart_rate = int(base_heart_rate + (m / (duration_minutes / 3)) * 40 * intensity_factor) if m < duration_minutes / 3 else int((base_heart_rate + 40) + random.randint(-8, 8) * intensity_factor)
                step_count = int(base_steps + random.randint(-10, 15) * intensity_factor)
                calories = round(step_count * random.uniform(0.04, 0.06) * intensity_factor, 2)
                distance = round(step_count * random.uniform(0.75, 0.85) * intensity_factor, 2)
                
                ts = start_time + timedelta(minutes=m)
                doc = {
                    "user_id": int(user_id), "device_id": device_id, "timestamp": ts,
                    "heart_rate": heart_rate, "step_count": step_count, "calories": calories,
                    "distance": distance, "pace": round(random.uniform(4.5, 9.0), 2),
                    "elevation": round(random.uniform(-1, 2), 2),
                    "blood_oxygen": round(random.uniform(95.0, 99.9), 1),
                    "temperature": round(random.uniform(36.1, 37.2), 1),
                    "weather": random.choice(["sunny", "cloudy", "rainy", "windy"])
                }
                docs.append(doc)
            
            # 3. 插入MongoDB
            if docs:
                db.raw_records.insert_many(docs)

            if update_status:
                self.root.after(0, lambda: self.status_var.set(f"设备 {device_id}: 计算统计数据并存入MySQL..."))

            # 4. 计算并存储统计数据到MySQL
            self.calculate_and_store_stats(user_id, start_time, end_time)

            if update_status:
                self.root.after(0, lambda: self.status_var.set(f"设备 {device_id}: 数据生成成功！"))
            
        except Exception as e:
            error_msg = f"为设备 {device_id} 生成数据时出错: {e}"
            if update_status:
                self.root.after(0, lambda: self.on_task_error(error_msg))
            else:
                print(error_msg) # Log to console if it's a batch job
            raise e
        finally:
            if mongo_client:
                mongo_client.close()

    def calculate_and_store_stats(self, user_id, start_time, end_time):
        mongo_client = None
        mysql_conn = None
        try:
            # 连接DB
            mongo_client = pymongo.MongoClient(
                host=self.mongo_config['host'], port=self.mongo_config['port'],
                username=self.mongo_config['username'], password=self.mongo_config['password'],
                authSource='workout_app'
            )
            mongo_db = mongo_client[self.mongo_config['database']]
            mysql_conn = mysql.connector.connect(**self.mysql_config)
            cursor = mysql_conn.cursor()

            # 1. 从MongoDB查询原始数据
            records = list(mongo_db.raw_records.find({
                "user_id": int(user_id), "timestamp": {"$gte": start_time, "$lte": end_time}
            }))
            if not records: 
                self.root.after(0, lambda: self.log(f"用户 {user_id} 没有找到 {start_time.strftime('%Y-%m-%d %H:%M')} 至 {end_time.strftime('%Y-%m-%d %H:%M')} 的原始数据"))
                return

            # 2. 计算运动记录统计
            duration_sec = (end_time - start_time).total_seconds()
            total_distance_m = sum(r['distance'] for r in records)
            avg_pace_sec_km = (duration_sec / (total_distance_m / 1000)) if total_distance_m > 0 else 0
            avg_heart_rate = sum(r['heart_rate'] for r in records) / len(records)
            total_calories = sum(r['calories'] for r in records)
            elevation_gain = sum(r['elevation'] for r in records if r['elevation'] > 0)
            avg_step_rate = (sum(r['step_count'] for r in records) / duration_sec * 60) if duration_sec > 0 else 0

            # 插入 running_records
            sql_run = """
                INSERT INTO running_records 
                (user_id, workout_type, start_time, end_time, duration, distance, avg_pace, 
                avg_heart_rate, calories, elevation_gain, avg_step_rate, weather, temperature)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """
            values_run = (
                user_id, '跑步', start_time, end_time, int(duration_sec), round(total_distance_m, 2),
                int(avg_pace_sec_km), int(avg_heart_rate), int(total_calories), round(elevation_gain, 2),
                int(avg_step_rate), records[-1]['weather'], round(sum(r['temperature'] for r in records) / len(records), 1)
            )
            cursor.execute(sql_run, values_run)
            run_record_id = cursor.lastrowid
            
            self.root.after(0, lambda: self.log(f"用户 {user_id}: 已插入跑步记录ID: {run_record_id}, 距离: {round(total_distance_m/1000, 2)}km, 时长: {int(duration_sec/60)}分钟"))

            # 3. 计算健康数据统计
            resting_heart_rate = min(r['heart_rate'] for r in records)
            max_heart_rate = max(r['heart_rate'] for r in records)
            avg_blood_oxygen = sum(r['blood_oxygen'] for r in records) / len(records)
            health_index = random.randint(60, 95)
            stress_index = random.randint(10, 40)
            sleep_quality = random.randint(50, 95)
            sleep_duration = random.randint(360, 540)
            
            # 插入或更新 physical_stats
            sql_health = """
                INSERT INTO physical_stats (user_id, date, avg_heart_rate, resting_heart_rate, max_heart_rate, 
                avg_blood_oxygen, health_index, stress_index, sleep_quality, sleep_duration)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                ON DUPLICATE KEY UPDATE
                avg_heart_rate = VALUES(avg_heart_rate), resting_heart_rate = VALUES(resting_heart_rate),
                max_heart_rate = VALUES(max_heart_rate), avg_blood_oxygen = VALUES(avg_blood_oxygen),
                health_index = VALUES(health_index), stress_index = VALUES(stress_index),
                sleep_quality = VALUES(sleep_quality), sleep_duration = VALUES(sleep_duration)
            """
            values_health = (
                user_id, start_time.date(), int(avg_heart_rate), resting_heart_rate, max_heart_rate,
                round(avg_blood_oxygen, 1), health_index, stress_index, sleep_quality, sleep_duration
            )
            cursor.execute(sql_health, values_health)
            
            self.root.after(0, lambda: self.log(f"用户 {user_id}: 已更新体能数据，日期: {start_time.date()}, 平均心率: {int(avg_heart_rate)}, 健康指数: {health_index}"))

            mysql_conn.commit()
            self.root.after(0, lambda: self.log(f"用户 {user_id}: 数据同步完成"))
            
        except Exception as e:
            if mysql_conn: mysql_conn.rollback()
            error_msg = f"计算或存储统计数据时出错: {e}"
            self.root.after(0, lambda: self.log(f"错误: {error_msg}"))
            raise Exception(error_msg)
        finally:
            if mongo_client: mongo_client.close()
            if cursor: cursor.close()
            if mysql_conn: mysql_conn.close()

    def log(self, message):
        print(message)

if __name__ == "__main__":
    root = ThemedTk(theme="arc")
    root.configure(bg="#121212")
    app = DeviceSimulatorGUI(root)
    root.mainloop() 