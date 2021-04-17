
class Model {//construction de la classe avec le constructeur
    constructor(nom, mdp){
        this.nom = nom;
        this.mdp = mdp;
    }

    //function qu'on va utiliser pour remplacer le mot de passe
    RemplaceMDP(newMdp){
        this.mdp = newMdp; // this.mdp = la propriété de la classe model instancier plus haut newMdp = paramètre de la fonction
    }
    
    GetName(){
        return this.nom;
    }

    GetMdp(){
        return this.mdp;
    }

    
}





class Presenter {
    constructor(view){
        this.view = view;
        this.model = null;
    }

    SetModel(model){
        this.model = model;
    }

    ChangePassword(password){
        this.model.RemplaceMDP(password);
        this.view.displayMessage(this.model.GetName(),this.model.GetMdp());
    }

    CurrentNamePassword(){
        this.view.displayMessage(this.model.GetName(),GetMdp());
    }
}






class View {
    constructor(){
        this.presenter = null;
    }

    registerWith(presenter){
        this.presenter = presenter;
    }
    
    displayMessage(name, mdp){
        console.log("name : " + name + " " + "mot de passe : " + mdp);
        console.log(model);
        alert("name : " + name + " " + "mot de passe : " + mdp);

    }

    

}

function submit_by_id() {
    console.log(model);
    let Password = document.getElementById("MDP").value;
    document.getElementById("form_id").submit(); //form submission
    presenter.ChangePassword(Password);
}

let model = new Model("Mathilde", "monmotdepasse");
let view = new View();
let presenter = new Presenter(view);
presenter.SetModel(model); //liens presenter model
view.registerWith(presenter); //liens view presenter
// console.log(presenter)
// console.log(view)
// console.log(model)











