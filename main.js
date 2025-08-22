function dashs (ele){
    if (ele != '-')
        return true
}

function remov (texts){

    let before = texts.split("");
    let withOutDash = before.filter(dashs).join("");
  
    console.log(withOutDash);
}

remov("Omar-Alamoudi1");
remov("Omar-2");
remov("-Omar-3");


