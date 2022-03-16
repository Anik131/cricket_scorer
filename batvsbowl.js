<script type="text/javascript">
 const queryString = window.location.search;
 // console.log(queryString);
 const urlParams = new URLSearchParams(queryString);
 console.log(urlParams);
  const hostname = urlParams.get('hostname')
  console.log(hostname);
  const visitorteam = urlParams.get('visitorteam')
  console.log(visitorteam);

</script>
