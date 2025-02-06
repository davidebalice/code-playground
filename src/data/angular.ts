const exercises = [
    {
      title: "Hello Angular",
      description: "Crea un semplice componente Angular con un messaggio di benvenuto.",
      code: `
  import { Component } from '@angular/core';
  
  @Component({
    selector: 'app-root',
    template: '<h1>Benvenuto in Angular!</h1>',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent { }
      `
    },
    {
      title: "Interpolazione di variabili",
      description: "Mostra una variabile TypeScript nel template usando {{ }}.",
      code: `
  import { Component } from '@angular/core';
  
  @Component({
    selector: 'app-root',
    template: '<h1>Il numero è: {{ numero }}</h1>',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    numero: number = 42;
  }
      `
    },
    {
      title: "Binding degli attributi",
      description: "Modifica dinamicamente un attributo HTML con property binding.",
      code: `
  import { Component } from '@angular/core';
  
  @Component({
    selector: 'app-root',
    template: '<button [disabled]="isDisabled">Cliccami</button>',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    isDisabled: boolean = true;
  }
      `
    },
    {
      title: "Event Binding",
      description: "Gestisci eventi degli utenti con `(click)`.",
      code: `
  import { Component } from '@angular/core';
  
  @Component({
    selector: 'app-root',
    template: '<button (click)="increment()">Cliccami</button> <p>Contatore: {{ count }}</p>',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    count: number = 0;
  
    increment() {
      this.count++;
    }
  }
      `
    },
    {
      title: "Two-Way Data Binding",
      description: "Sincronizza un input con una variabile usando `ngModel`.",
      code: `
  import { Component } from '@angular/core';
  
  @Component({
    selector: 'app-root',
    template: '<input [(ngModel)]="nome"> <p>Ciao, {{ nome }}!</p>',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    nome: string = '';
  }
      `
    },
    {
      title: "Direttiva *ngIf",
      description: "Mostra o nasconde un elemento in base a una condizione.",
      code: `
  import { Component } from '@angular/core';
  
  @Component({
    selector: 'app-root',
    template: '<button (click)="toggle()">Mostra/Nascondi</button><p *ngIf="isVisible">Eccomi!</p>',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    isVisible: boolean = false;
  
    toggle() {
      this.isVisible = !this.isVisible;
    }
  }
      `
    },
    {
      title: "Direttiva *ngFor",
      description: "Itera su una lista di elementi e visualizzali.",
      code: `
  import { Component } from '@angular/core';
  
  @Component({
    selector: 'app-root',
    template: '<ul><li *ngFor="let item of items">{{ item }}</li></ul>',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    items: string[] = ['Mela', 'Banana', 'Arancia'];
  }
      `
    },
    {
      title: "Pipes",
      description: "Trasforma i dati nel template con pipe integrate.",
      code: `
  import { Component } from '@angular/core';
  
  @Component({
    selector: 'app-root',
    template: '<p>Minuscolo: {{ testo | lowercase }}</p><p>Data: {{ oggi | date }}</p>',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    testo: string = "CIAO MONDO";
    oggi: Date = new Date();
  }
      `
    },
    {
      title: "Servizi e Dependency Injection",
      description: "Crea un servizio e usalo nel componente.",
      code: `
  // service.ts
  import { Injectable } from '@angular/core';
  
  @Injectable({
    providedIn: 'root'
  })
  export class DataService {
    getMessage() {
      return "Messaggio dal servizio!";
    }
  }
  
  // component.ts
  import { Component } from '@angular/core';
  import { DataService } from './data.service';
  
  @Component({
    selector: 'app-root',
    template: '<p>{{ message }}</p>',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    message: string;
  
    constructor(private dataService: DataService) {
      this.message = this.dataService.getMessage();
    }
  }
      `
    }
  ];
  
  export default exercises;
  