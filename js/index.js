var np = {};//主程序对象

np.config = {
    'appContainer':'.notepad-app'
}
np.bShowStatusBar = false; //是否显示状态栏
np.bWrap = false; //是否换行
np.fontFamily = 'Arial'; //默认字体
np.fontStyle = '常规'; //默认字体样式
np.fontSize = '16'; //默认字体大小

np.fontHandler = function(e){
    np.fontFamily = e.family;
    np.fontStyle = e.style;
    np.fontSize = e.size;

    $editor.setFont(e)
}

$(function(){
    $menubar.show(np.menuData); //显示菜单栏
    $editor.show({ //显示编辑区
        posHandle:function(row,col){
            $statusBar.setRowCol(row,col)
        },
        contentHandle:function(isEmpty){
            $menubar.enabled(1,6,isEmpty)
        }
    })
    $editor.setFont({
        family:np.fontFamily,
        style:np.fontStyle,
        size:np.fontSize
    })
    // $statusBar.init()
    // $statusBar.display(false)

    var $app = $('body')
    $app.click(function(){
        $menubar.hideMenu()
        $editor.focus()
    })
})