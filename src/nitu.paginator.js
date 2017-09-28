/*
* @Author: Abraham Stalin Aguilar Valencia ASAV
* @follow me: twitter @abrahamstalin
* This library was created in order to generate pages in long texts.
* This program is free software: you can redistribute it and/or modify
*    it under the terms of the GNU General Public License as published by
*    the Free Software Foundation, either version 3 of the License, or
*    (at your option) any later version.
*/
function NituPaginador(params){
  this.params = params;
  if (this.params.divElement == null){
    alert('The "divElement" parameter is necessary');
  }else if (!document.getElementById(this.params.divElement)){
    alert('The "divElement['+this.params.divElement+']" no exists');
  }else{
    document.getElementById(params.divElement).style.display= 'none';
    this.currentPage = 0;
    this.arrayOfPages = [];
    if (!this.params.lengthWords){
      this.params.lengthWords = 500;
    }
  }




  this.makeMagic = function (){
    var countArray = '';
    var lengthCount = 0;
    var elementArray = '';
    var _arrayChildrens = document.getElementById(this.params.divElement).children;
    for (i in _arrayChildrens){
      var item = _arrayChildrens[i];
      if (this.checkIsNode(item)){
        elementArray +=  item.outerHTML;
        lengthCount+= this.getTextNode(item).split(/\s+/).length;
        if (lengthCount>this.params.lengthWords){
          this.arrayOfPages.push(elementArray);
          elementArray = '';
          lengthCount = 0;
        }
      }
    }
    if (lengthCount > 0){
      this.arrayOfPages.push(elementArray);
    }
    document.getElementById(params.divElement).innerHTML = '<div id="'+params.divElement+'_content"></div><div id="'+params.divElement+'_bar_buttons"></div>';
    document.getElementById(params.divElement).style.display= 'block';
    this.paintPage();
  }

  this.paintPage = function (){
    document.getElementById(params.divElement+'_content').innerHTML = this.arrayOfPages[this.currentPage];
    if (document.getElementById(params.btnNext) && document.getElementById(params.btnPrevious)){
      document.getElementById(params.btnPrevious).disabled = false;
      document.getElementById(params.btnNext).disabled = false;
      if (this.currentPage == 0){
        document.getElementById(params.btnPrevious).disabled = true;
      }else if (this.currentPage == (this.arrayOfPages.length -1)){
        document.getElementById(params.btnNext).disabled = true;
      }
    }

  }

  this.nextPage = function (){
    if ((this.arrayOfPages.length -1) > this.currentPage){
      this.currentPage = this.currentPage +1;
      this.paintPage();
    }
  }

  this.previousPage = function (){
    if (this.currentPage > 0){
      this.currentPage = this.currentPage -  1;
      this.paintPage();
    }
  }

  this.checkIsNode = function(o){
      return (
        typeof Node === "object" ? o instanceof Node :
        o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName==="string"
      );
    }

  this.getTextNode = function (element){
    ret = "";
    var length = element.childNodes.length;
    for(var i = 0; i < length; i++) {
        var node = element.childNodes[i];
        if(node.nodeType != 8) {
            ret += node.nodeType != 1 ? node.nodeValue : this.getTextNode(node);
        }
    }
    return ret;
  }



  if(document.getElementById(this.params.divElement)){
    this.makeMagic();
  }

}
