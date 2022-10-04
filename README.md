

Big thanks to Brad @ Travery Media for the starter code for this chat app, as well 
as his tutorial that got me started with websockets and socket.io.

first commit with branch grace

just pushed the origin head into the file, goint to do a simple push and see 
if it update on github now, that it wasn't doing before

just created branch copyWorkingMaster to sort this mess out fully
forgot to checkout the branch I made after I got here
Now I am on HurryUp and picking apart what needs to be done

I may be going backwards by doing this but we will see

Finding I had a remote called griefSupport then setting this branch to connect to it
I may be making some real progress in replacing the missing pieces..
I think this griefSupport branch is the one that connects with heroku(?)I dont see the update on github 
and this is supposed to be the master branch
Now, I did see it updated with previous commit..

I am making a small update here as I get closer to getting going

New Branch called major here with the intended purpose of reconnecting the branch
called griefSupport
Just got to this branch from the other side..
main lost her remote but was rebased against origin major and was already up to date.

now we need to find a branch off of griefSupport for main, but I think that is the heroku way, may be best 
to go through master so she can be back in the github repo


ok, I just set that up. origin through master to main... was it correct?

no conflicts when doing a pull to github

I suppose it is possible that this main branch can push to griefSupport, one of its remotes now listed, 
we shall see


did a pull and was asked what one and I knew I wanted origin master and was 
completed with no problem and with successfull rebase and updated ref/heads/main
first time met with some resistance but making this second commit and will give another go ,
rebased the second time against origin main instead of master


mustBeMasterGriefSupport could be the remote repo to heroku


the attempt to push to griefSupport was stopped!! and would have required a pull first "because the tip 
of your current branch is behindits remote counterpart" I am pretty sure that is what we wanted/needed 
to have happen to prevent the pushes from main going directly to deployment.
Just found out I am in a rebase here when trying to pull from griefSupport the remotes do not
directly say heroku but I am thinking that they it goes through the grief support remote



going to try a push from main and check the github repo before tracking down the heroku connections

I suppose it is possible that this main branch can push to griefSupport, one of its remotes now listed,
we shall see


