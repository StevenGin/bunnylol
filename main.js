'use strict';const COMMANDS={fb:{name:"Facebook",url:"https://facebook.com/",searchurl:"https://www.facebook.com/search/top/?q="},m:{name:"Messenger Desktop App",url:"messenger://"},mw:{name:"Messenger Web",url:"https://www.messenger.com/"},wa:{name:"WhatsApp Desktop App",url:"whatsapp://"},waw:{name:"WhatsApp Web",url:"https://web.whatsapp.com/"},gm:{name:"Gmail",url:"https://mail.google.com/mail/u/0",searchurl:"https://mail.google.com/mail/u/"},gd:{name:"Google Drive",url:"https://drive.google.com/drive/u/0",searchurl:"https://drive.google.com/drive/u/"},sis:{name:"UVA SIS",url:"https://sisuva.admin.virginia.edu/psc/ihprd/UVSS/SA/s/WEBLIB_HCX_GN.H_SPRINGBOARD.FieldFormula.IScript_Main"},col:{name:"UVA Collab",url:"https://collab.its.virginia.edu/portal"},yt:{name:"YouTube",url:"https://youtube.com/",searchurl:"https://www.youtube.com/results?search_query="},gh:{name:"GitHub",url:"https://github.com/",searchurl:"https://www.github.com/search?q="},r:{name:"Reddit",url:"https://reddit.com/",searchurl:"https://www.reddit.com/search?q="},l:{name:"Linkedin",url:"https://linkedin.com/"},ig:{name:"Instagram",url:"https://instagram.com/",searchurl:"https://instagram.com/"},tw:{name:"Twitter",url:"https://twitter.com/",searchurl:"https://twitter.com/search?q="},me:{name:"Rithik.me - Personal Website",url:"https://rithik.me/me"},g:{name:"Google",url:"https://google.com/",searchurl:"https://www.google.com/search?q="},wp:{name:"Washington Post",url:"https://www.washingtonpost.com/regional/"},wsj:{name:"Wall Street Journal",url:"https://www.wsj.com/"},cnn:{name:"CNN",url:"https://www.cnn.com/"},tr:{name:"HooHacks Trello Board",url:"https://trello.com/b/GjKhtVPK/hoohacks"},n:{name:"Netflix",url:"https://netflix.com/",searchurl:"https://www.netflix.com/search?q="},h:{name:"Hulu",url:"https://hulu.com/"},pv:{name:"Amazon Prime Video",url:"https://www.amazon.com/Amazon-Video/b/?&node=2858778011&ref=dvm_MLP_ROWNA_US_1",searchurl:"https://www.amazon.com/s?i=instant-video&ref=nb_sb_noss_2&k="},p:{name:"Piazza",url:"https://piazza.com/class"},vs:{name:"VS Code",url:"vscode://"},wf:{name:"Webflow",url:"https://webflow.com/design/hoohacks"},hs:{name:"Hubspot",url:"https://app.hubspot.com/"},$:{name:"Robinhood",url:"https://robinhood.com/",searchurl:"https://robinhood.com/stocks/"},cal:{name:"Google Calendar",url:"https://calendar.google.com/calendar/r"},uvacovid:{name:"UVA COVID-19 Tracker",url:"https://returntogrounds.virginia.edu/covid-tracker"},DEFAULT:{name:"Default - Google Search",url:"https://google.com/",searchurl:"https://www.google.com/search?q="}},CLASSES={priv:{name:"CS 4501: Privacy in the Internet Age",zoomurl:"https://virginia.zoom.us/j/96274680764?pwd=eXFBcFViZUVkMUJQQitobG5EQ3BXdz09",discussionurl:"https://piazza.com/class/ke81el8uw9o3ra",collaburl:"https://collab.its.virginia.edu/portal/site/bbaeb16c-6afb-4835-9b16-92378b639304",url:"https://www.cs.virginia.edu/~ys3kz/courses/fall20/cs4501/"},sts:{name:"STS 4500: STS and Engineering Practice",url:"https://collab.its.virginia.edu/portal/site/07e85646-fc70-487b-83e5-65728bf69fcc",zoomurl:"https://virginia.zoom.us/w/92179481987?tk=lb8hbvtc_d9jv-GZ7NDqcyaiY_bVRizjLvKvOCaq7Y4.DQIAAAAVdlNFgxZ0Q095dGdQbVJ3dU00a0d2bTRPOVN3AAAAAAAAAAAAAAAAAAAAAAAAAAAA&pwd=bWJOdUN5eVUxMnlqOEd2RVJ0VmJkUT09"},startup:{name:"STS 2830: Startup Operations for Entrepreneurs",zoomurl:"https://virginia.zoom.us/j/98989659952?pwd=bk9DVE5TR1pZUzNubkk0elBBMDl6QT09",discussionurl:"https://piazza.com/class/ke8p78ntzjt3be",url:"https://collab.its.virginia.edu/portal/site/87a9eeb6-6e49-4631-bc47-8dbf649e5dd4"},mobile:{name:"CS 4720: Mobile App Development",url:"https://mobileappdev.teachable.com/courses"},ml:{name:"CS 4774: Machine Learning",zoomurl:"https://virginia.zoom.us/j/97039189577?pwd=WUpLYTVhVGt2LzNDemdmNUxINXNEUT09",discussionurl:"slack://2020fuvacsmac-93g9279",url:"https://qiyanjun.github.io/2020f-UVA-CS-MachineLearningDeep/",collaburl:"https://collab.its.virginia.edu/portal/site/708c9e27-aaab-4acc-ab33-ff493c83527b/"},db:{name:"CS 4750: Database Systems",url:"https://www.cs.virginia.edu/~up3f/cs4750/schedule.html",zoomurl:"https://virginia.zoom.us/j/92678230496?pwd=VVNqdHk3TVF0YndRNFFlbW9PR0pyZz09",discussionurl:"https://piazza.com/class/kdkzzs4q102d3",collaburl:"https://collab.its.virginia.edu/portal/site/27a3a9f2-00f9-45db-a2ed-6e99e9415ea1",specialurl:"http://usersrv01.cs.virginia.edu/phpmyadmin/index.php"},cloud:{name:"CS 4740: Cloud Computing",discussionurl:"discord://",url:"https://nmagee.github.io/cs4740/schedule/",collaburl:"https://collab.its.virginia.edu/portal/site/4721482a-fa9b-45af-a68c-ee47e0e0e89d"},bus:{name:"STS 4810: New Product Development",url:"https://collab.its.virginia.edu/portal/site/63ca844a-473b-4fd9-80e8-417943b0c335",zoomurl:"https://virginia.zoom.us/j/94123273294?pwd=cnVUaHdRN1B6NVMzOHhsZlhkNDBOdz09"}},viewHelpPage=function(){const a=Object.keys(COMMANDS).map(a=>{const b=COMMANDS[a];return{name:b.name,url:b.url,command:a}});$("#help-table").DataTable({data:a,columns:[{data:"command",title:"Command"},{data:"name",title:"Name"},{data:"url",title:"URL"}],order:[[1,"asc"]],paging:!1});const b=Object.keys(CLASSES).map(a=>{const b=CLASSES[a];return{name:b.name,url:b.url,command:a}});$("#classes-table").DataTable({data:b,columns:[{data:"command",title:"Command"},{data:"name",title:"Name"},{data:"url",title:"URL"}],order:[[1,"asc"]],paging:!1})},redirect=async function(a){await window.location.replace(a)},bunnylol=async function(a){let b=[];if(a.startsWith("$")?(b=a.split(/[ $]/g),b[0]="$"):b=a.split(/[ +]/g),0<b.length){const c=b[0].toLowerCase();if(c in CLASSES){const a=CLASSES[c];if(1<b.length){if("j"===b[1].toLowerCase()&&a.zoomurl)return await redirect(`${a.zoomurl}`),!0;if("d"===b[1].toLowerCase()&&a.discussionurl)return await redirect(`${a.discussionurl}`),!0;if("c"===b[1].toLowerCase()&&a.collaburl)return await redirect(`${a.collaburl}`),!0;if("s"===b[1].toLowerCase()&&a.specialurl)return await redirect(`${a.specialurl}`),!0}return await redirect(`${a.url}`),!0}if(c in COMMANDS){const d=COMMANDS[c],e=new URL(d.url).protocol;if("https:"!==e&&"http:"!==e&&viewHelpPage(),d.searchurl&&1!==b.length){const b="$"===d.name?c.length+1:c.length;return await redirect(`${d.searchurl}${encodeURIComponent(a.substr(b))}`),!0}return await redirect(d.url),!0}}return!1},currCmd=new URL(window.location.href).searchParams.get("search")??"help";switch(currCmd){case"help":viewHelpPage();break;default:bunnylol(currCmd).then(a=>{!a&&COMMANDS.DEFAULT.searchurl&&redirect(`${COMMANDS.DEFAULT.searchurl}${encodeURIComponent(currCmd)}`)}).catch(a=>{console.log(a)});}