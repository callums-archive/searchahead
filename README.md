# searchahead
simple bootstrap-only replacement for typeahead

```html
<div class="form-group">
  <label for="findUser">Search Users</label>
  <input type="text" class="form-control" placeholder="eg. howzitcal" name="findUser" id="findUser">
</div>
```

```javascript
document.addEventListener("DOMContentLoaded", function(){
  new searchahead('#findUser', {
    // local: ["User 1", "User 2", "User 3", "User 4"],
    remote: "/api/find/user?user=%TERM",
    limit: 5,
    minLength: 2
  });
});
```
