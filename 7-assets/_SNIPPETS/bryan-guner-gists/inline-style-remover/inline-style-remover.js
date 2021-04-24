// inline style remover (naive version)
// remove inline styles
let classes = {};
function sort_object_keys(obj){
    let keys = Object.keys(obj);
    let sorted = keys.sort();
    let out={}
    for(let s of sorted){
        out[s]=obj[s];
    }
    return out;
}
// solves duplicate classes.
function node2properties(node){
    let s = node.getAttribute("style");
    if(s == null){
        return {};
    }
    let p = s.split(";");
    let out = {};
    for(let prop in p){
        let parts = p[prop].split(":");
        out[parts[0]] = parts[1];
    }
    return out;
}

function object2hash(properties){
    let sorted = sort_object_keys(properties);
    let hash = "";
    for(let p in properties){
        hash += p+":"+properties[p]+";"
    }
    return hash;
}
let g_class_counter = 0;
function classNameCreator(style){
  g_class_counter++;
  return "class"+g_class_counter

}
// recursively remove the inline styles
// of a function, because, inline style suck.

function removeAndPrintInlineStyles(node){//f 
    //console.log(node.getAttribute("style"));
    if(node.getAttribute("style")!=null){
        let properties = node2properties(node);
        let hash = object2hash(properties);
        let className = "ERR"; 
        if(!(hash in classes)){
            //add
            classes[hash] = classNameCreator();
        }
        className = classes[hash];
        node.removeAttribute("style"); //remove style.
        node.className = className;
    }
    for(let child of node.children){
        removeAndPrintInlineStyles(child);
    }    

}
function getFixedCode(node){
    g_class_counter = 0;
    classes = {};
    removeAndPrintInlineStyles(node);
    let x = "";
    x += "<style>\n";
    for(let rule in classes){
        let formattedRules = rule.replace(";",";\n\t");
        let className = classes[rule];
        x+="."+className+"{\n\t" + formattedRules + "\n}\n\n";
    }
    x += "</style>\n";
    let y = node.innerHTML;
    return x+y;

}
function init(){
    let n = document.getElementById("name");
    removeAndPrintInlineStyles(n);
    let x = "";
    x += "<style>\n";
    for(let rule in classes){
        let formattedRules = rule.replace(";",";\n\t");
        let className = classes[rule];
        x+="."+className+"{\n\t" + formattedRules + "\n}\n\n";
    }
    x += "</style>\n";
    let y = document.getElementById("name").outerHTML;
    //console.log(x+y);
    return x+y;
}
function fixCode(){
  let c = document.getElementById("left").value;
  let hidden = document.getElementById("hidden");
  hidden.innerHTML = c;
  let result = getFixedCode(hidden);
        document.getElementById("right").value = result;
  
}
window.onload = init;
