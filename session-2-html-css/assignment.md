# Session two (31/5/2034)

## Html5Exam:

1. Question1 : Answer The Follwoing Questions

   1. What is the use of the \<link\> tag?

      - linking an external respurce like (css files, fonts, cdns)

   2. With which tags is the \<source\> element associated?

      - media tags like ( picture, audio, video)

   3. What is the best way to code the sample shown?
      <details open>
         <summary>
            title
         </summary>
         <p>desc</p>
      </details>

   4. When should you use \<ol\> and \<ul\> elements?

      - ol : is for ordered lists (list with numbering)
      - ul : is for unordered lists (list without numbering) like the listing used in this answer or for nav menus etc.

   5. How do you confirm that a document is written in HTML5?

      - by checking the doctype tag in the very beginning of the file. \<!DOCTYPE html\>
      - find semantic elements tags in the code

   6. What does the code shown below accomplish?

      - it will render a differant image depending on screen width (viewport size)
      - it will render an image from the first source if the width of the screen >= 1000px
      - it will render an image from the secound source if the width of the screen >= 750px and <a 1000px

   7. What code will produce this table?
      <table>
      <colgroup>
      <col style="background-color: yellow;" span="2">
      </colgroup>
      <thead>
      <tr>
         <th>Col 1</th>
         <th>Col 2</th>
         <th>Col 3</th>
      </tr>
      </thead>
      <tbody>
      <tr>
         <td>first</td>
         <td>second</td>
         <td>third</td>
      </tr>
      </tbody>
      </table>

   8. What code will produce this table?
      <ul>
          <li>
            Office Supplies
            <ul>
              <li>Stabler</li>
              <li>Paperclips</li>
            </ul>
          </li>
          <li>
            Groceries
            <ul>
              <li>milk</li>
            </ul>
          </li>
        </ul>

   9. What code will produce this table?
      <blockquote>
         <q>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
         repellendus.
         </q>
         <footer>
           <cite> lynda wienman </cite>
         </footer>
       </blockquote>

   10. What is the correct way to code a link that, when clicked, will send an email to email@example.com with the subject of "Hello"?

       - c- <a href="mailto:email@example.com?subject=Hello">Click me</a>

   11. What is the best semantic to use Quotes in HTML?
       <blockquote>
          <p>
           <cite>Steve Kruz</cite>
           said:
           <q>He will win</q>
          </p>
       </blockquote>

   12. What is the best way to mark up this layout?
       <div>
          <h3>Mailing Address</h3>
          <address>
            6410 Via Real
            <br />
            Carpinteria, Ca 93013
          </address>
          <a href="mailto:info@linkedin.com">info@linkedin.com</a>
        </div>

   13. What is wrong with this code?

       - h2 element does not belong to the ul element it should be outside

   14. HTML elements that aren't meant to store content or other elements are called \_\_\_\_ elements. [complete]
       - void

## Question 2: Practical Assignment :

4. [**Implement in html**](https://startbootstrap.com/previews/creative)
   [code in github](https://github.com/HOS-ELDIN/DEPI-React/tree/main/session-2-html-css)
   [live preview](https://hos-eldin.github.io/DEPI-React/session-2-html-css/index.html)


## Search:
Linking a font using the <link> tag is generally considered better than using @import in CSS
