import { Component, OnInit, AfterViewChecked} from '@angular/core';
interface Person {
    name?: string,
    old: number | string
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit, AfterViewChecked, Person{
  public name = 'ssssssss';
  public old = 23 // 类对接接口
  private obj: Person[] = [{name: 'xxxxxxx', old: '24'}]
  test:Person = {
     name: '222222',
     old: 24
  } // 直接调用接口
  constructor() { }
  click(name:number):void {
      console.log(name)
  }
  ngOnInit() {
  }
  ngAfterViewChecked () {

  }
}
