<?php
$conn = mysqli_connect("localhost", "root", "", "momnoms");


$search = $_GET['q'];


$sql = "SELECT * FROM foods WHERE name LIKE '%$search%'";
$result = mysqli_query($conn, $sql);


while($row = mysqli_fetch_assoc($result)) {
    echo "<p>" . $row['name'] . " - " . $row['price'] . " BDT</p>";
}
?>
