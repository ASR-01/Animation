  var tl =gsap.timeline({scrollTrigger:{
    trigger:'.two',
    start:'0% 95%',
    end:"50% 50%",
    scrub:true,
   
}})

tl.to("#fantaImg",{
    top:'120%',
    left:"3.5%"
} ,'orange')


tl.to("#peelImg",{
    top:'150%',
    left:"25%"
},'orange' )


tl.to("#orangeImg",{
    width:"15%",
    top:'150%',
    right:"0%"
},'orange' )



tl.to("#leafImg",{
    width:"100%",
    top:'90%',
},'orange' )



var t2 =gsap.timeline({scrollTrigger:{
    trigger:'.three',
    start:'0% 95%',
    end:"70% 50%",
    scrub:true,
    // markers:true
}})




t2.to("#fantaImg",{
   width :'32%',
    top:'215%',
    left:"35%"

} ,'apple' )

t2.to("#peelImg",{
    width :'20%',
     top:'205%',
     left:"41%"
 
 },'apple' )