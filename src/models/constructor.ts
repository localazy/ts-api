/**
 * Initial service options used for authorization and content resolution
 */
 type Constructor = {
   /** Localazy project's Authentication token.
   * @see [Authentication](https://localazy.com/docs/api/authentication)
   */
   projectToken: string;
   /** Prefix for all api calls. Useful for proxying requests */
   baseUrl?: string;
 };

export default Constructor;
