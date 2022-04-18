import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { Users } from '../class/users';
import { Repos } from '../class/repos';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment'
