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
  
  // 处理每一行
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
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
    
    // 处理标题
    if (line.startsWith('#')) {
      // 计算标题级别 (h1-h6)
      let level = 0;
      while (line[level] === '#' && level < 6) {
        level++;
      }
      
      const text = line.substring(level).trim();
      nodes.push({
        name: `h${level}`,
        attrs: {},
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
    if (/^[\*\-]\s/.test(line)) {
      const text = line.replace(/^[\*\-]\s/, '').trim();
      
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
    
    // 处理粗体和斜体
    if (line.includes('**') || line.includes('*') || line.includes('__') || line.includes('_')) {
      let processedText = line;
      
      // 处理粗体 (**text** 或 __text__)
      processedText = processedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      processedText = processedText.replace(/__(.*?)__/g, '<strong>$1</strong>');
      
      // 处理斜体 (*text* 或 _text_)
      processedText = processedText.replace(/\*(.*?)\*/g, '<em>$1</em>');
      processedText = processedText.replace(/_(.*?)_/g, '<em>$1</em>');
      
      nodes.push({
        name: 'p',
        attrs: {},
        children: [{
          type: 'text',
          text: processedText
        }]
      });
      continue;
    }
    
    // 处理普通段落
    nodes.push({
      name: 'p',
      attrs: {},
      children: [{
        type: 'text',
        text: line
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
  
  // 移除标题符号
  text = text.replace(/#+\s/g, '');
  
  // 移除列表符号
  text = text.replace(/^\d+\.\s/gm, '');
  text = text.replace(/^[\*\-]\s/gm, '');
  
  // 移除粗体和斜体符号
  text = text.replace(/\*\*(.*?)\*\*/g, '$1');
  text = text.replace(/__(.*?)__/g, '$1');
  text = text.replace(/\*(.*?)\*/g, '$1');
  text = text.replace(/_(.*?)_/g, '$1');
  
  return text;
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
  
  // 找到指定部分的开始
  for (let i = 0; i < lines.length; i++) {
    if (sectionRegex.test(lines[i])) {
      startIndex = i + 1;
      break;
    }
  }
  
  if (startIndex === -1) return '';
  
  // 找到下一个标题（作为指定部分的结束）
  for (let i = startIndex; i < lines.length; i++) {
    if (/^#+\s/.test(lines[i])) {
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