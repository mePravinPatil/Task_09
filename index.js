/*
   1  . Fix the bugs in below snippet

<html lang="en">
<head>
    <title>Document
        guvi
    </title>
</head>
<body>
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
            <div>
                Guvi Geek Network
            </div>
</body>
</html>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
   2 .Try the below one

<html lang="en">

<head>
    <title>Document
    </title>
</head>
<body>
    guvi
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </div>
            <div>
                Guvi Geek Network
            </div>
</body>
</html>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

3 . Design a contact us form with all fields as required.


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Summary</title>
    <style>
        #first {
            background-color: gray;
            width: 300px;
            margin: auto;
            padding-left: 10px;
            padding-top: 3px;
            padding-bottom: 5px;
            border: 1px solid grey;
        }

        #second {
            background-color: rgba(194, 189, 189, 0.767);
            display: flex;
            width: 300px;
            margin: auto;
            padding: 5px;
            border: 1px solid grey;
            flex-direction: column;
            flex-wrap: nowrap;
            align-content: space-around;
            justify-content: space-between;
            align-items: stretch;
        }

        button {
            margin: auto;
             display: flex;
                text-align: center;
        }
       
    </style>

</head>

<body>
    <div id="first">
        <h1> Contact Us</h1>
        <p>Please fill the below form</p>
    </div>
    <div id="second">
        <p style="margin-bottom: 5px;">Full Name <span style="color: red;">*</span>
        </p>
        <input type="text" placeholder="Enter your name" required>
        <p style="margin-bottom: 5px;">E-Mail <span style="color: red;">*</span>
        </p>
        <input type="text" placeholder="Enter your email" required>
        <p style="margin-bottom: 5px;">Message <span style="color: red;">*</span>
        </p>
        <textarea  rows="5" cols="20" required>
               
            </textarea><br>
        <button>Submit</button>


    </div>
</body>

</html>

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

  4 .. Use certain HTML elements to display the following in a HTML page

<html>
<head>
    <title>Javascript</title>
    <style>
        li{
            list-style-type: lower-alpha;
        }
        .child{
            list-style-type: circle;
        }
        .parent{
            list-style-type: disc;
        }
        .newChild{
            list-style-type: circle;
        }
       
    </style>
</head>

<body>
    <ul>
        <li class="parent">Programming Language</li>
        <ul>
            <li class="child">JavaScript</li>
            <ol >
                <li>Angular</li>
                <li>React</li>
                <li>Vue.js</li>
            </ol>
            <li class="child">Python</li>
            <ol >
                <li>Django Framework</li>
                <li>Flask Framework</li>
               
            </ol>
            <li class="child">Java</li>
            <ol >
                <li>Spring</li>
                <li>Maven</li>
                <li>Hibernate</li>
            </ol>
        </ul>
    </ul>
    
    <ul>
        <li class="parent">Database</li>
        <ol  >
            <li class="child">MySQL</li>
            <li class="child">MongoDB</li>
            <li class="child">Cansandra</li>
        </ol>
    </ul>
        
</body>

</html>

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  5  Create an element that helps you to open the https://google.com in separate new tab.

<html>
<head>
    <title>Link Navigation</title>
</head>

<body>
   <a href=" https://google.com" target="_blank">Click me</a> 
</body>

</html>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
<html>

<head>
    <title>HtmlDesign</title>
</head>

<body>  
    <h2>Employee Type</h2>
    <form >
    <input type="radio" name="type">Salaried
    <input type="radio" name="type">Own Business
</form>
</body>

</html>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>..
<html>
<head>
    <title>HtmlDesign</title>
</head>
<body>   
         <ul>
             <li><mark>"HTML & CSS is awesome"</mark></li>
         </ul>
</body>
</html>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>...

 7  Design form shown in the link (http://evc-cit.info/cit040/formguide/card_0.png)

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Design for Image</title>
    <style>
        body {
            background-color: black;
        }

        h4 {
            background-color: red;
            height: 16px;
            color: white;
            margin-left: 5%;
        }

        input {
            border: none;
            border-bottom: 3px solid black;
            font-style: italic;
        }

        pre {
            margin-top: 2px;
        }

        .Main_container {
            border: 5px solid black;
             height: 200px;
            width: 300px; 
            background-color: white;
            display: inline-block;
            border: 1px solid black;
            padding: 10px;
            outline: white;
            outline: 5px solid black;
            outline-offset: -10px;
        }
    </style>
</head>
<body>
    <div class="Main">
        <div class="Main_container">
            <h4>Yes! I want to subscibe to Mag-O-Zine</h4>
            <br>
            <form action="">
                <input type="text" value="Joe">
                <input type="text" value="Schonegeare"> <br>
                <pre>First Name              Last Name </pre>
                <input type="text" size="40" value="1001 washington street">
                <pre>Adreess</pre>
                <input type="text" size="20" value="Augtom">
                <input type="text" size="20" value="CA">
                <input type="text" size="20" value="99999">
                <pre>City                   State                  Zip</pre>
                <b>Subscribe for:</b><input type="checkbox"><b>1 year ($19.95)</b>
                <input type="checkbox"> <b> 2 years ($35.00)</b>
                <br><b>Send me more information about:</b><br>
                <input type="checkbox"><b> Computer-Zine </b><br>
                <input type="checkbox"><b> Fishing-Zine</b><br>
                <input type="checkbox"><b> Cat-O-Zine</b><br>
            </form>
        </div>
    </div>
</body>
</html>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

8  .  Use the table tag to design given image Click here.


<html>
<head>
    <title>HtmlDesign</title>
    <style>
        .myData {
           text-align: center;
           
           border-collapse: collapse;
       }
 
        td {
               border: 1px solid black;
               padding: 30px;
           }
        .heading_text{
               text-align: center;
               margin: 10px;
        }
    </style>
</head>
<body>   
    <table class="myData" align="center">
        <tbody>
            <caption class="heading_text" align="center" >Health Chart</caption>
            <tr>
            <td rowspan="2">State of health</td>
            <td colspan="2">Fasting Value</td>
            <td>After Eating</td>
        </tr>
        <tr>
            <td>Minimum</td>
            <td>Maximum</td>
            <td>2 hours of eating</td>
        </tr>
        <tr>
            <td>Healthy</td>
            <td>70</td>
            <td>100</td>
            <td>Less than 140</td>
        </tr>
        <tr>
            <td>Pre-Diabetes</td>
            <td>101</td>
            <td>126</td>
            <td>140 to 200</td>
        </tr>
        <tr>
            <td>Diabetes</td>
            <td>More than 126</td>
            <td>N/A</td>
            <td>More than 200</td>
        </tr>
    </tbody>
</table>    
</body>
</html>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

9  Write HTML input tags snippet to show default values for all Form elements.

<html>
<head>
    <title>HtmlDesign</title>
</head>
<body>  
    <form class="main" action="">
       First Name : <input type="text" name="first_name" value="Sandip"><br><br>
       Last Name:   <input type="text" name="last_name" value="Sanap"><br><br>
              age : <input type="text" name="age" value="25"><br><br>
        <input type="submit" name="Submit">
    </form> 
    
</table>    
</body>
</html>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

11 Create an HTML page, which should contain all types of input elements.

<html>
<head>
    <title>HtmlDesign</title>
    <style>
        .conainer_form{
            align-items: center;
            justify-content: center;
        }
    </style>
</head>
<body>  
    <form class="container_form">
        <caption>HTML page, which should contain all types of input elements</caption><br><br>
        firstname :<input type="text" name="firstname"><br> <br>
        password:  <input type="Password" name="password"><br> <br>
    <input type="radio" name="color" value="pink">pink <br><br>
    <input type="checkbox" name="sport5" value="badminton">Badminton<br><br>  
    <input type="color" name="downclick" value="#f5f5dc"> Downclick  <br><br>
    <input type="date" name="Enddate"> End date:<br><br>  
    Select date & time: <input type="datetime-local" name="meetingdate"> <br><br> 
    <input type="email" name="email" required>  <br><br>
    <label>Enter your Birth Month-year: </label> <input type="month" name="newMonth"> <br>  <br>
    <label>Enter your age: </label>   <input type="number" name="num" min="50" max="80"><br><br>
    <input type="url" name="website" placeholder="http://example.com"><br><br>
    Select your best week of year:<input type="week" name="bestweek">   <br><br>
    search here : <input type="search" name="q">  <br><br>
    Enter your phone number:<input type="tel" name="telephone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required> <br><br>
    <input type="image" alt="Submit" src="https://th.bing.com/th/id/OIP.Mq2s2xOqyBVaZKQNnKULagHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.25&pid=1.7"  width="100px"> <br>
    <input type="reset" value="Reset">  <br><br>
    <input type="submit" value="submit"><br><br>
    <input type="button" value="Clcik me " onclick="alert('you are learning HTML')"> <br><br>
    <input type="file" name="newfile"> <br><br>
        
</form>
</body>
</html>

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
