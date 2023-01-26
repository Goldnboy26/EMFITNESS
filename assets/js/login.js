 

function signIn(){
    // Google's OAuth 2.0 endpoint for requesting an access token
  var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
 
  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  var form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);
 
  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {'client_id': '462548233409-s24ombaeh8i1kbqtl8rrak4lr2umehii.apps.googleusercontent.com',
                'redirect_uri': 'https://goldnboy26.github.io/EMFITNESS/gallery.html',
                'response_type': 'token',
                'scope':'https://www.googleapis.com/auth/userinfo.profile',
                'include_granted_scopes': 'true',
                'state': 'pass-through value'};
 
  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }
 
  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}