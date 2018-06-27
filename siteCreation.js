var filesYour = require('fs');
var dir = './SiteCreation';
var dir1 = './SiteCreation/css';
var dir2 = './SiteCreation/js';
var dir3 = './SiteCreation/img';


 filesYour.mkdirSync(dir);
  filesYour.mkdirSync(dir1);
   filesYour.mkdirSync(dir2);
    filesYour.mkdirSync(dir3);

	
	filesYour.writeFile(__dirname+ "/SiteCreation/index.html", "<h1>html rocks</h1>");
	filesYour.writeFile(__dirname+ "/SiteCreation/css/style.css", "/*============*/");
	filesYour.writeFile(__dirname+ "/SiteCreation/js/custom.js", "// This is a javascript file");
	filesYour.writeFile(__dirname+ "/SiteCreation/index.php", "<? echo 'welcome'");
	filesYour.writeFile(__dirname+ "/SiteCreation/.htaccess", "#==============");
	filesYour.writeFile(__dirname+ "/SiteCreation/css/normalize.css", "/*=========================*/");
	filesYour.writeFile(__dirname+ "/SiteCreation/robots.txt", "SEO");
	filesYour.writeFile(__dirname+ "/SiteCreation/humans.txt", "/*============*/");
	filesYour.writeFile(__dirname+ "/SiteCreation/js/jquery.js", "// This is a javascript file");
	filesYour.writeFile(__dirname+ "/SiteCreation/404.html", "<h1>html rocks</h1>");
	filesYour.writeFile(__dirname+ "/SiteCreation/sitemap.xml", "");
	filesYour.writeFile(__dirname+ "/SiteCreation/site.webmanifest", " ");
	filesYour.writeFile(__dirname+ "/SiteCreation/js/modernizr.js", "// This is a javascript file");
	filesYour.writeFile(__dirname+ "/SiteCreation/index.php", "// This is a javascript file <?php ?>");



