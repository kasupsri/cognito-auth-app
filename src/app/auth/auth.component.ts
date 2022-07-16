import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hub } from 'aws-amplify';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    Hub.listen('auth', (data) => {
      console.log(data.payload.event);
      switch (data.payload.event) {
        case 'signIn':
          //this.router.navigateByUrl('');
          console.log(data.payload.data);
          break;
        case 'signOut':
          //this.router.navigateByUrl('');
          break;
      }
    });
  }
}
