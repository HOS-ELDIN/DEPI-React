# Session one (26/5/2034)

## Search:

1. The target attribute for anchor tag types.

   - **\_self:** The current browsing context. (Default)
   - **\_blank:** Opens the linked document in a new window or tab
   - **\_parent:** The parent browsing context of the current one. If no parent, behaves as \_self. (ex: using \<iframe>)
   - **\_top:** The topmost browsing context. To be specific, this means the "highest" context that's an ancestor of the current one. If no ancestors, behaves as \_self.

2. Description lists.
   a html element that creates a list of descriptions (like:definitions)

   - the main tag is **\<dl>**.
   - followed by the main term/s to be decriped with the tag **\<dt>**
   - then the definition or the description with the tag **\<dd>**
   - ex:
     <dl>
       <dt>Description lists.</dt>
       <dd>a html element that creates a list of descriptions (like:definitions)</dd>

       <dt>Another desc term</dt>
       <dd>its description</dd>
     </dl>

3. stateful vs. Stateless application

   - The key difference between stateful and stateless applications is that stateless applications don’t “store” data whereas stateful applications require backing storage.

   - **Stateful applications and processes:** allow users to store, record, and return to already established information and processes over the internet. In stateful applications, the server keeps track of the state of each user session, and maintains information about the user's interactions and past requests. They can be returned to again and again, like online banking or email.

   - **Stateful applications**: like the Cassandra, MongoDB and mySQL databases all require some type of persistent storage that will survive service restarts.

   - **A stateless process or application:**,does not retain information about the user's previous interactions. There is no stored knowledge of or reference to past transactions. Each transaction is made as if from scratch for the first time. Stateless applications provide one service or function and use a content delivery network (CDN), web, or print servers to process these short-term requests.(ex: search session, convert file or image service)

## Practical Assignment :

4. [**Implement in html**](https://startbootstrap.com/previews/freelancer)
   [code in github](https://github.com/HOS-ELDIN/DEPI-React/tree/main/session-1-html)
   [live preview](https://hos-eldin.github.io/DEPI-React/session-1-html/index.html)
   [main repo](https://github.com/HOS-ELDIN/DEPI-React/)



[new task](https://startbootstrap.com/previews/creative)