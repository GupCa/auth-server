import { Injectable } from '@angular/core';

// import * as http from 'http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // login(username: string, password: string): void {
  //   console.log('login post called');
  //   const headers: HttpHeaders = new HttpHeaders({
  //     'Content-Type': 'text/html',
  //   });

  //   this.post({
  //     url: 'http://localhost:8080/auth/login',
  //     body: null,
  //     headers: {
  //       params: {
  //         username,
  //         password,
  //       },
  //       headers,
  //     },
  //   }).then(
  //     (data) => {
  //       console.log('success');
  //       console.log(data);
  //     },
  //     (err) => {
  //       console.log('error');
  //       console.log(err);
  //     }
  //   );
  // }

  // post({
  //   url,
  //   body,
  //   headers,
  // }: {
  //   url: any;
  //   body: any;
  //   headers: any;
  // }): Promise<unknown> {
  //   const options = {
  //     method: 'POST',
  //     headers,
  //   };

  //   return new Promise((resolve, reject) => {
  //     const req = http
  //       .request(url, options, (res: http.IncomingMessage) => {
  //         let data = '';

  //         if (
  //           res.statusCode &&
  //           (res.statusCode < 200 || res.statusCode >= 300)
  //         ) {
  //           console.error(
  //             `Error ${res.statusCode}: ${res.statusMessage} during the request to the ${url}\n`
  //           );
  //           return reject(new Error(`${res.statusCode}: ${res.statusMessage}`));
  //         }

  //         res.on('data', (chunk: string) => {
  //           data += chunk;
  //         });

  //         res.on('end', () => {
  //           resolve(JSON.parse(data));
  //         });
  //       })
  //       .on('error', (error: any) => {
  //         reject(error);
  //       });

  //     req.write(body);
  //     req.end();
  //   });
  // }
}
