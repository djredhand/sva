<?php
session_start();
$_SESSION = array();
$time = new DateTime();
$date = $time -> getTimeStamp();
$_SESSION[0] = $date;
$js = file_get_contents('gallery.js');
$_SESSION[1] = $js;
?>
<html>
	<head>
    <meta http-equiv="pragma" content="no-cache" />
<style type="text/css">
#nav{
	width:200px;
	float:left;
}
#thumbs{
	max-height:120px;
}
#thumbContainer{
	float:left;
	width:400px;
	max-height:120px;
	display:inline;
	overflow-x:scroll;
	overflow-y:hidden;
	display:none;
	visibility:hidden;
	margin:10px 0 0 0;
}
.thumb{
	float:left;
	padding:0 0 0 4px;
}
#navImages{
	width:200px;
	float:left;

}
#bigImage img{
	width:600px;
}
input{
	width:130px;
	height:20px;
	line-height:14px;
	font-size:12px;
}
</style>
		
	</head>
	<body>
    	<h2>Enter your Picassa username below: </h2>
    	<form>
        	<input id="user" type="text" name="user" size="25">
            <input type="button" value="Submit" onClick="submitButton();">
            <input type="button" value="Count Objects in memory " onClick="countObjects();">
            <input type="button" value="Create Nav " onClick="createNav();">
            
        </form>

        <div id="error"></div>
        <nav id="nav">
        	<ul class="albumNav">
            </ul>
        </nav>
    	<div id="navImages"></div>
        <div id="thumbContainer">
        <div id="thumb"></div>
        <!--end #thumb Container--></div>
        <div id="bigImage"></div>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
        <script type="text/javascript">
		<?php echo($_SESSION[1]);?>
		</script>
	</body>
	
</html>

<?php
session_destroy();
$_SESSION[0] = "";
$_SESSION[1] = "";
?>
<?php
echo($_SESSION[0]);
?>