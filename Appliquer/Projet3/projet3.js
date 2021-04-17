//Model
class Model {//construction de la classe avec le constructeur
    constructor(nom, mdp){
        this.nom = nom;
        this.mdp = mdp;
    }

    //functions qu'on va utiliser pour remplacer le mot de passe, retourner le mot de passe et le nom de la personne
    RemplaceMDP(newMdp){
        this.mdp = newMdp;
    }
    
    GetName(){
        return this.nom;
    }

    GetMdp(){
        return this.mdp;
    }

    
}


//Presenter
class Presenter {
    constructor(view){
        this.view = view;
        this.model = null;
    }

    SetModel(model){
        this.model = model;
    }
    //Fonction qui rennvoie vers la fonction pour changer le mdp avec le nouveau mdp en paramètre
    //puis recupère le mdp et nom via le model renvoie vers la vue dans displayMessage
    ChangePassword(password){
        this.model.RemplaceMDP(password);
        this.view.displayMessage(this.model.GetName(),this.model.GetMdp());
    }

    //CurrentNamePassword(){
        //this.view.displayMessage(this.model.GetName(),this.model.GetMdp());
    //}
}

//View
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
    document.getElementById("form_id").submit(); 
    presenter.ChangePassword(Password);
}

let model = new Model("Mathilde", "monmotdepasse");
let view = new View();
let presenter = new Presenter(view);
presenter.SetModel(model); 
view.registerWith(presenter); 
// console.log(presenter)
// console.log(view)
// console.log(model)
