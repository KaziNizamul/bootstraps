> a mechanism, 
that uses additional http headers
to tell the browser, <br>
> weither a specific webApp,
can share resource 
from another webApp. <br>
>(additional http headers se pta krte hai ki, ek site, dusre site ka resource access kr skta hai ya nahi.)

<br> <br>

***what are all not allowed :***
- different domain : akshaysaini.in   ->   google.com/api/data ❌
- different port : 8080  ->  80 ❌
- subdomain : api.akshaysaini.in  ->  akshaysaini.in ❌
- different protocol : https  ->  http ❌

<br>

***what CORS actually is ?***
- Step1 : Origin1 will send `preflight (OPTIONS)` request to Origin2.
 <br>

- Step2 : if Origin2 verifies that OPTION call is safe,
          Origin2 will send `additional headers` to Origin1.
          <br>
- Step3 : Origin1 will send `actual request` to Origin2.
          Most commonly used `additional headers` is : `Accept-Control-Allow-Origin`
          eg: `Accept-Control-Allow-Origin: *`
          <br>
          `*` means allow, all other domain can access this resource.
          AND, if you want to restrict access to specific domain,
          you can use `Access-Control-Allow-Origin: domain.com`.
<br>
          Also, we can restrict some methods here, like POST etc (means, dont allow POST here.)

<br> <br>


***how to solve :***
- chrome plugin
- `chrome.exe --disable-web-security` in win+run (this will bypass all web-security)

