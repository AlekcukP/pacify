class UrlHelper {
    static DOMAIN = __APP_CONFIG__.domain;
    static TLD = __APP_CONFIG__.tld;

    static HTTP_PROTOCOL = 'http:';
    static HTTPS_PROTOCOL = 'https:';

    static getBaseUrl(domain = UrlHelper.DOMAIN, tld = UrlHelper.TLD,protocol = UrlHelper.HTTPS_PROTOCOL) {
        return UrlHelper.constructBaseUrl(
            protocol,
            UrlHelper.constructHostName(domain, tld)
        );
    }

    static constructHostName(domain, tld) {
        return _.join([domain, tld], '.');
    }

    static constructBaseUrl(protocol, hostname) {
        return `${protocol}//${hostname}`;
    }

    static appendSubdomain(url, subdomain) {
        const instance = UrlHelper.instance(url);

        const domains = _.split(instance.pathname, '.');
        domains.unshift(subdomain);

        instance.pathname = _.join(domains, '.');

        return instance.href;
    }

    static instance(url) {
        return new URL(url);
    }
}

export default UrlHelper;
