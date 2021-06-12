import AppConstants from "../settings/constants";

class NetworkService {
    makeAPIGetRequest = (url: string) => {
        return this.makeAPIRequest(
            url,
            this._getOptions(AppConstants.network_request_methods.GET)
        );
    };

    makeAPIPostRequest = <Type>(url: string, data: Type) => {
        return this.makeAPIRequest(
            url,
            this._getPostOptions(AppConstants.network_request_methods.POST, data)
        );
    };

    makeAPIDeleteRequest = (url: string) => {
        return this.makeAPIRequest(
            url,
            this._getOptions(AppConstants.network_request_methods.DELETE)
        );
    };

    makeAPIPatchRequest = <Type>(url: string, data: Type) => {
        return this.makeAPIRequest(
            url,
            this._getPostOptions(AppConstants.network_request_methods.PATCH, data)
        );
    };

    makeAPIPutRequest = <Type>(url: string, data: Type) => {
        return this.makeAPIRequest(
            url,
            this._getPostOptions(AppConstants.network_request_methods.PUT, data)
        );
    };

    makeAPIRequest<Type>(url: string, options: Type) {
        async function postData(url: string, options: Type) {
            const response = await fetch(url, options);
            return await response.json();
        }

        return postData(url, options);
    }

    _getOptions(method: string) {
        return {
            method: method,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        };
    }

    _getPostOptions = <Type>(method: string, data: Type) => {
        return {
            method: method,
            body: data || {},
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        };
    };
}

export default NetworkService;
