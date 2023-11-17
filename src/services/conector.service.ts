export class ConectorService {
    usuario_session: any = {};

    // submitLogin = (username: string, password: string) => {
    //     return new Promise((resolve, reject) => {
    //     try {
    //         const UrlRequest = "/iniciarsesiontoken";
    //         const bodyRequest = {
    //             userId: username,
    //             passWord: password,
    //         };
    //         const headerRequest = {
    //         headers: { "Content-Type": "application/json" },
    //         };
    //         this.http
    //         .post(UrlRequest, bodyRequest, headerRequest)
    //         .toPromise()
    //         .then((res) => {
    //             resolve(res);
    //         });
    //     } catch (err) {
    //         reject(err);
    //     }
    //     });
    // };
}