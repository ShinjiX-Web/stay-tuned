<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Process the form data (you can save it to a database, send emails, etc.)

  // Redirect to the thank you page
  header("Location: thank-you.html");
  exit;
}
?>
