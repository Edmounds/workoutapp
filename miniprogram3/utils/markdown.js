/**
 * 简单的Markdown解析器
 * 用于将Markdown文本转换为微信小程序可以渲染的格式
 */

/**
 * 解析Markdown文本
 * @param {String} markdown - Markdown格式的文本
 * @returns {Object} 解析后的富文本节点数组
 */
function parse(markdown) {
  if (!markdown) return [];
  
  // 按行分割
  const lines = markdown.split('\n');
  const nodes = [];
  
  let inList = false;
  let listItems = [];
  let listType = '';
  let inCodeBlock = false;
  let codeContent = '';
  let codeLanguage = '';
  
  // 处理每一行
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // 处理代码块
    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        // 开始代码块
        inCodeBlock = true;
        codeLanguage = line.substring(3).trim();
        codeContent = '';
      } else {
        // 结束代码块
        inCodeBlock = false;
        nodes.push({
          name: 'pre',
          attrs: { class: 'code-block' },
          children: [{
            name: 'code',
            attrs: { class: codeLanguage ? `language-${codeLanguage}` : '' },
            children: [{
              type: 'text',
              text: codeContent
            }]
          }]
        });
      }
      continue;
    }
    
    // 如果在代码块内，收集内容
    if (inCodeBlock) {
      codeContent += line + '\n';
      continue;
    }
    
    // 跳过空行
    if (!line) {
      // 如果正在处理列表，并且遇到空行，结束列表
      if (inList) {
        nodes.push({
          name: listType === 'ol' ? 'ol' : 'ul',
          attrs: {},
          children: listItems
        });
        inList = false;
        listItems = [];
        listType = '';
      }
      continue;
    }
    
    // 处理水平线
    if (line === '---' || line === '***' || line === '___') {
      nodes.push({
        name: 'hr',
        attrs: {}
      });
      continue;
    }
    
    // 处理标题
    if (line.startsWith('#')) {
      // 计算标题级别 (h1-h6)
      let level = 0;
      while (level < line.length && line[level] === '#' && level < 6) {
        level++;
      }
      
      const text = line.substring(level).trim();
      nodes.push({
        name: `h${level}`,
        attrs: { style: 'margin: 16px 0; font-weight: bold;' },
        children: [{
          type: 'text',
          text: text
        }]
      });
      continue;
    }
    
    // 处理有序列表
    if (/^\d+\.\s/.test(line)) {
      const text = line.replace(/^\d+\.\s/, '').trim();
      
      if (!inList || listType !== 'ol') {
        // 如果之前有其他类型的列表，先结束它
        if (inList) {
          nodes.push({
            name: listType === 'ol' ? 'ol' : 'ul',
            attrs: {},
            children: listItems
          });
          listItems = [];
        }
        
        inList = true;
        listType = 'ol';
      }
      
      listItems.push({
        name: 'li',
        attrs: {},
        children: [{
          type: 'text',
          text: text
        }]
      });
      continue;
    }
    
    // 处理无序列表
    if (/^[\*\-\+]\s/.test(line)) {
      const text = line.replace(/^[\*\-\+]\s/, '').trim();
      
      if (!inList || listType !== 'ul') {
        // 如果之前有其他类型的列表，先结束它
        if (inList) {
          nodes.push({
            name: listType === 'ol' ? 'ol' : 'ul',
            attrs: {},
            children: listItems
          });
          listItems = [];
        }
        
        inList = true;
        listType = 'ul';
      }
      
      listItems.push({
        name: 'li',
        attrs: {},
        children: [{
          type: 'text',
          text: text
        }]
      });
      continue;
    }
    
    // 处理引用
    if (line.startsWith('>')) {
      const text = line.substring(1).trim();
      nodes.push({
        name: 'blockquote',
        attrs: { style: 'padding-left: 12px; border-left: 4px solid #ccc; color: #666;' },
        children: [{
          type: 'text',
          text: text
        }]
      });
      continue;
    }
    
    // 处理内联样式的文本
    let processedText = line;
    
    // 处理链接 [text](url)
    processedText = processedText.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color: #3366cc; text-decoration: underline;">$1</a>');
    
    // 处理加粗 (**text** 或 __text__)
    processedText = processedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    processedText = processedText.replace(/__(.*?)__/g, '<strong>$1</strong>');
    
    // 处理斜体 (*text* 或 _text_) - 确保不会匹配已经处理过的加粗文本
    processedText = processedText.replace(/\*([^*]*?)\*/g, '<em>$1</em>');
    processedText = processedText.replace(/_([^_]*?)_/g, '<em>$1</em>');
    
    // 处理行内代码 (`code`)
    processedText = processedText.replace(/`([^`]+)`/g, '<code style="background-color: #f0f0f0; padding: 2px 4px; border-radius: 3px; font-family: monospace;">$1</code>');
    
    // 处理图片 ![alt](url)
    processedText = processedText.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2" style="max-width: 100%;"/>');
    
    // 添加处理后的段落
    nodes.push({
      name: 'p',
      attrs: {},
      children: [{
        type: 'node',
        name: 'span',
        attrs: {},
        children: [{
          type: 'text',
          text: processedText
        }]
      }]
    });
  }
  
  // 如果最后还有未处理的列表
  if (inList) {
    nodes.push({
      name: listType === 'ol' ? 'ol' : 'ul',
      attrs: {},
      children: listItems
    });
  }
  
  return nodes;
}

/**
 * 将markdown转换为纯文本
 * @param {String} markdown - Markdown格式的文本
 * @returns {String} 转换后的纯文本
 */
function toText(markdown) {
  if (!markdown) return '';
  
  let text = markdown;
  
  // 移除代码块
  text = text.replace(/```[\s\S]*?```/g, '');
  
  // 移除标题符号
  text = text.replace(/^#+\s/gm, '');
  
  // 移除列表符号
  text = text.replace(/^\d+\.\s/gm, '');
  text = text.replace(/^[\*\-\+]\s/gm, '');
  
  // 移除引用符号
  text = text.replace(/^>\s/gm, '');
  
  // 移除水平线
  text = text.replace(/^(---|\*\*\*|___)\s*$/gm, '');
  
  // 处理链接 [text](url) -> text
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  
  // 移除图片 ![alt](url) -> alt
  text = text.replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1');
  
  // 移除粗体和斜体符号
  text = text.replace(/\*\*(.*?)\*\*/g, '$1');
  text = text.replace(/__(.*?)__/g, '$1');
  text = text.replace(/\*(.*?)\*/g, '$1');
  text = text.replace(/_(.*?)_/g, '$1');
  
  // 移除行内代码符号
  text = text.replace(/`([^`]+)`/g, '$1');
  
  // 移除多余空行
  text = text.replace(/\n{3,}/g, '\n\n');
  
  return text.trim();
}

/**
 * 提取markdown中的关键内容
 * @param {String} markdown - Markdown格式的文本
 * @param {String} section - 要提取的部分标题（如"训练计划"，"营养建议"）
 * @returns {String} 提取的内容
 */
function extractSection(markdown, section) {
  if (!markdown || !section) return '';
  
  const lines = markdown.split('\n');
  const sectionRegex = new RegExp(`^#+\\s*${section}`, 'i');
  
  let startIndex = -1;
  let endIndex = lines.length;
  let headingLevel = 0;
  
  // 找到指定部分的开始
  for (let i = 0; i < lines.length; i++) {
    if (sectionRegex.test(lines[i])) {
      startIndex = i + 1;
      // 记录标题级别，用于确定何时结束该部分
      headingLevel = lines[i].match(/^(#+)/)[1].length;
      break;
    }
  }
  
  if (startIndex === -1) return '';
  
  // 找到下一个相同或更高级别的标题（作为指定部分的结束）
  for (let i = startIndex; i < lines.length; i++) {
    const match = lines[i].match(/^(#+)\s/);
    if (match && match[1].length <= headingLevel) {
      endIndex = i;
      break;
    }
  }
  
  return lines.slice(startIndex, endIndex).join('\n').trim();
}

module.exports = {
  parse,
  toText,
  extractSection
}; 