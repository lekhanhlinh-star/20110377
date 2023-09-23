const myGroup=require("../models/mygroup")

const myGroupController={
    getAllInfoGroup:(req,res)=>{
        try{
            res.status(200).json({myGroup})
        }
        catch(error){
            res.status(500).json({error})
        }


    },
    addNewMenberToGroup:(req,res)=>{
        if (!req.is('application/json')) {
            return res.status(400).json({ message: 'Not valid - Data must be in JSON format' });
        }
        const newMember = req.body;
        const existmember=myGroup.find(m=>m.id===newMember.id)
        if(existmember){
            return res.status(400).json({ message: 'Not valid - Member already exists in myGroup' });
        }

        myGroup.push(newMember);

        res.status(200).json({ message: 'Member added to myGroup' });

    },
    getInfoById:(req,res)=>{
        const member=myGroup.find(m=>m.id===req.params.id)
        if(!member){
            res.status(404).json({"error":"Not valid"})
        }

        res.status(200).json(member)
    },
    getMessageById:(req,res)=>{
        const id = req.params.id;

        if (!id) {
            // If no <id> parameter, render the list of all student names
         
            res.render('message', { myGroup});
        } else {
            // Find the student by <id> and render the message template
            const foundStudent = myGroup.find(member => member.id === id);
    
            if (foundStudent) {
                res.render('message', { "myGroup":[foundStudent] });
            } else {
                res.status(404).send('Not valid');
            }
        }

    }


}
module.exports=myGroupController;