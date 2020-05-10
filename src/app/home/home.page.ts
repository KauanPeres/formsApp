import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

// Importações necessárias para formulários
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/*
* Para funcionar os formulários, precisamos importar (adicionar)
* o módulo "ReactiveFormsModule" no arquivo .module.ts
*/

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public formLogin: FormGroup;

  // Mensagens de validação
  // Mesmo que não haja nenhuma validação, devemos mesmo assim criar uma lista... "exemplo: []"
  public mensagens_validacao = {
    email: [
      { tipo: 'required', mensagem: 'É obrigatória digitar a senha!' },
      { tipo: 'email', mensagem: 'E-mail inválido!' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'É obrigatória digitar a senha!' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.' },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caracteres.' }
    ]
  }

  constructor(public formBuilder: FormBuilder, public alertController: AlertController) {

    //Monta o formulário
    this.formLogin = this.formBuilder.group({
      // Declara ps campos do formulário
      email: ['', Validators.compose([Validators.email, Validators.required])],
      senha: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(8), Validators.required])]
    });
  }

  public login(){
    if (this.formLogin.valid) {

    }else {
      this.alertFormInvalid();
    }
  }

  async alertFormInvalid() {
    const alert = await this.alertController.create({
      header: 'Erro!',
      message: 'Formulário inválido, confira os dados.',
      buttons: ['Ok']
    });

    await alert.present();
  }

}
