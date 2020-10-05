import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-username',
    templateUrl: './username.component.html',
    styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
    username = ""
    usernameChangeStatus = "Username not changed yet."

    constructor() { }

    ngOnInit(): void {
    }

    onEnterUsername () {
        this.usernameChangeStatus = "Username changed to: " + this.username;
    }
}

