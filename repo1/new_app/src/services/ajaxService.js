export function ajaxService(url, params) {
    return fetch('http://localhost:5000' + url, params).then((data) => {
      return data.json();
    });
  }

  export function ajaxAuthService(url, params = {}) {
    return fetch(`${process.env.REACT_APP_API}/api` + url, params).then(
      (data) => {
        if (data.ok) {
          return data.json();
        }

        throw Error();
      }
    );
  }