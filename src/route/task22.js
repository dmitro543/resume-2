<div class="p-5">
    <div class="card">
        <div class="card-body">
            {{#with task31}}
                {{#with navigator}}
                   {{#each links}}
                     <p class="btn btn-primary">text: {{text}}</p>
                     <span class="text-center">href: {{href}}</span>
                     <br>
                     <b class="btn btn-warning">text: {{text}}</b>
                     <var class="text-uppercase">href: {{href}}</var>
                     <br>
                     <h3 class="btn btn-danger">text: {{text}}</h3>
                     <samp class="text-lowercase">href: {{href}}</samp>
                      <br>
                      <br>
                     {{#each button}}
                      <article class="btn btn-success">text: {{text}}</article>
                      <aside class="text-capitalize">href: {{href}}</aside>
                     {{/each}}
                   {{/each}}
                   <br>
                   <div class="card">
                     <div class="card-body">
                       {{#each header}}
                         <small class="btn btn-outline-secondary">title: {{title}}</small>
                         <h6 class="btn btn-outline-info">description: {{description}}</h6>
                         <br>
                         {{#with button}}
                           <h5 class="btn btn-outline-dark">text: {{text}}</h5>
                           <h2 class="btn btn-outline-primary">link: {{link}}</h2>
                         {{/with}}
                       {{/each}}
                     </div>
                   </div>
                {{/with}}
            {{/with}}
        </div>
    </div>
</div>
