
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSV to HTML</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

<h2>CSV Data</h2>

<table>
    <thead>
        <tr>
            <th>sl </th>
            <th>usn</th>
            <th>name</th>
        </tr>
    </thead>
    <tbody>

        <?php
        
        // <!-- // Open the CSV file for reading -->
        if (($handle = fopen("sample_data.csv", "r")) !== FALSE) {
            // Read each row from the CSV file
            while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                // Output each row as a table row in HTML
                echo "<tr>";
                foreach ($data as $value) {
                    echo "<td>{$value}</td>";
                }
                echo "</tr>";
            }
            fclose($handle);
        }
        ?>
    </tbody>
</table>

</body>
</html>
