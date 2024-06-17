/**
 * Script de google
 * @param googleId 
 */
export const googleScript = (googleId: string,) => {
    return `
    <script async src="https://www.googletagmanager.com/gtag/js?id=${googleId}"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${googleId}');
    </script>
    `;
};