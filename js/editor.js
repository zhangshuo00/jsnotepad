// 编辑区
var $editor = (function(){
    var $DOM = $(''
        +'<div class="notepad-editor">'
            +'<textarea spellcheck="false" auto-size="none"></textarea>'
        +'</div>')
    var $textArea = $DOM.find('textarea')
    var cfg = {
        
    }

    function focus(){
        $textArea.focus()
    } 
    function setFont(e) {
        $textArea.css({'font-family': e.family, 'font-size': e.size + 'pt'});
        switch(e.style){
            case '常规':
                $textArea.css({'font-style':'','font-weight':''})
                break;
            case '斜体':
                $textArea.css({'font-style':'italic','font-weight':''})
                break
            case '粗体':
                $textArea.css({'font-weight': 'bold','font-style':''})
                break
            case '粗偏斜体':
                $textArea.css({'font-weight': 'bold', 'font-style': 'italic'})
                break
        }
    }
    function show(conf) {
        $.extend(cfg, conf);
        $('body').append($DOM);
        $textArea.trigger('focus');
    }
    return {
        focus:focus,
        setFont:setFont,
        show:show
    }
})()