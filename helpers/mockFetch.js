// const httpMocks = require('node-mocks-http');
// import httpMocks from 'node-mocks-http';

export async function mockFetch(url, req) {
    const body = JSON.parse(req.body);
    return new Promise(
        function (resolve, reject) {
            if (body.token === 'dummyCookieAllowUser') {
                // let blob = new Blob([JSON.stringify({result: 'success'}, null, 2)], {type: 'application/json'});

                // let init = {"status": 200, "statusText": "OK!"};
                let myResponse = {
                    json: ()=>{
                        return new Promise((resolve, reject)=>{
                            resolve({result: 'success'});
                        })
                    }
                };
                resolve(myResponse);
            } else {
                reject(new Error("…"));
            }
        }
    );
}
