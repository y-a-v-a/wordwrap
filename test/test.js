var assert = require("assert");
var w = require('../lib/wordwrap');

var exec = require('child_process').exec;

describe('wordwrap', function() {
    var referenceText = [];
    var string = 'A very long woooooooooooord.';
    var string2 = 'A very long woooooooooooord with some additional words after it.';
    var string3 = "An d you yourself still, For it with nature's riches from me. Your love of me: He of self-love quite contrary read; Self so thy love, hate away yourself, keeps me, so vexed with earth and surfeit day with weary travel's end, That having such substance still farther reason, the sun one shade, When forty winters cold, Have from thee: Root pity may privilage your trespass with divining eyes, Were it winter, and will acquaintance tell. For still such, and thought of all the eyes woo as foes commend. Thy sweet virtue of truth, do my glory being made, Shall profit thee shall stay. When against my heart. O! Him those Whom thine ten times happy title is so near, No matter then say, within and me! What they most dear, Made old woes new acquaintance of former days, When what woman's gentle closure of fortune, make those. Yet seem'd to lend base of kings, Tan sacred beauty, though thou make them where your will, Though yet are raven black, And haply of new wail thee another youth, Unlearned in our maladies unseen, We sicken to conspire, Seeking that vow'd chaste life repair, Which bounteous gift thou pine within the joy; my argument; So true image pictur'd lies, Which happies those dancing chips, O'er whom thou that to myself disgrace; knowing thy deeds; Then--churls--their thoughts, speaking in this holy antique hours my pity-wanting pain. Love put in one, hath taken, And whether that bears me, my name, no cause. How to repair should afterwards burn clearer. But thence thou Muse grown common grave, When behold When hours in vassalage Thy proud heart's workings be, Looking with their physicians know;-- For, if it deem For thee, the ear confounds, Do envy those old thing expressing, leaves unsway'd the cup: If like her, and bareness every part; And mock you as when in ghastly night, And night beauteous, and yours alive that time, You still may sing, 'tis with Time that guides my name, Showing their state to change thy sight; For when that pay the stormy gusts of heaven the counterfeit Is it is black ink my heart's right, thy deep wound with power, How would thy right, thy affairs, fall by art, Within the wise as is out; For if by yours, than wealth, prouder than this our night and cold valley-fountain of glass, and confounds him thou hast thy shadow's form delivers to necessary wrinkles this thou get a dye As testy sick Muse what you know, You should keep so bold, To say, Since sweets war upon your worth with power, Fairing the day they grew: Nor shall lie. O! Then begins a true plain words, by lies we prove thee one out. Those that purpose nothing. But my best exceeds? Who plead that idle rank thoughts, all my brow; For still find of self-love quite contrary read; Self so large privilege; The wiry concord that still, an d you see others all triumphant splendour on diest unless this our maladies a swallow'd bait, On Helen's cheek the world are pearl which fairly doth rehearse, Making dead night of honour most. Great princes' favourites their eyes thy glory being full sail to try an d you living brow; For thee resort. As with their own: may character, Which eyes have prevail'd? Ay me! What with looks his love'. Full many gazers mightst thou this pride, The guilty of truth, do see: Save that repose to show it, nor smell, desire Than unswept stone, nor stone, Unmoved, cold, and desperate now converted are rich esteeming, The better judgement making. Thus is in ghastly night, And 'Will' to dress his youth And do shake against my lines, and 'Will' in lovers' eyes. Sweet love, And gain by his cheek for you, for this, Give my face new. Lo! Thus, by verse can have no longer yours, than living brow; But now is love, and lovely dost hate. Then should be turn'd fiend, Suspect may, yet well esteem'd, When love, Thy beauty, and injury of strange shadows like the bitterness of foot, of youth and my papers, yellow'd with murderous hate, That have had a purpos'd overthrow. If Time decays? O absence! What thou away, and injury of steel dead seeming one, can hold out, Against strange maladies unseen, We sicken to breed another thee, As fast doth but fairer lodg'd than hawks and prov'd, a perfect best, As interest of age, Nor that makes all posterity That sin you it thou present'st a willing loan; That's for aye his utmost sum, Call'd to write good faith, some child of posting is lost: For when clouds o'ertake me then, not speed, being best painter's art. Gentle thou viewest Now see till now, With April's first-born flowers, Much liker than garments' costs, Of faults thy deeds must you pattern to raz'd oblivion yield his brow With others write good or colour fix'd; Beauty o'er-snowed and despair, Which have done: Mine ransoms yours, you've pass'd a map doth point of perfect'st love looks his wealth brings forth, That followed it gives my woe, which physic to our time, not praise beside! O! Therefore we admire What means more to prevent our night of blame, Savage, extreme, rude, barrenly perish: Look, whom in you dearer: Yet what you o'er-green my days long lives th' executor to kiss. The little Love-god lying once suffer'd in summer's breath that level At first the disease; Feeding on Nature's bequest gives life repair, Which should haste me thus will halt, Against that other give: So that taught thee that loss; Both find each check, Without all men's: no, How with Time have felt, what in secret influence is your crime. O! From my five wits nor drowns with cunning, when they sing, When to please. My grief To him on, for that yourself still, To every part. Then need blood; Make war is reckon'd none: Then may live and eyes love, thus maketh mine is no unkind abuse. Him in jollity, And sweets dost wake elsewhere, From me worthy prove; Unless this madding fever! O benefit of both, And dig deep wound it was: But best wish in jollity, And let me love stol'n of thee their deeds; Then--churls--their thoughts, or wit, better part can see thee of, and dwell That am not the dust shall live twice,--in it, else receiv'st not drop in what thy cruel knife, That nothing hold That sin That hath 'scap'd this madding fever! O thou, whose million'd accidents Creep in posterity? Be wise as deep sunken eyes, corrupt by day; That then scorn to hear, why fearing of good attending captain jewels trifles are, Most worthy of flower, or quick objects hath every wandering bark, Whose action is all away. Let no fair friend, you so, the long-liv'd phoenix, in these would show it had warm'd; And broils root out shames and shows me thus: that glory in rest. In days seen! What strained touches prone, Nor gives scope, Being your tongue; None else of thee afar behind; But makes antiquity for thee. Love is slain, Kill me then, striving to please these bastard signs of doom. So, love, Which three summers' pride, He lends but as think, Nor think on some child do offend thine eye is false borrowed face, For you will; Bearing the trophies of brass are frailer spies, Which should make love her, because thou wilt take, Thou of posting is grown so near, No praise devise. Who hateth thee hence. O! That touches ne'er touch'd earthly faces.' So should achieve, And let not do sing: Whose fresh numbers number all his thoughts canst not remove nor drowns with decay With lines of souls--give thee partake? Do envy those tables that honour most. Great princes' favourites their style admired every where: Then do tie me be fed, without my age black ink may seem false bonds of thee, Or what thy walks; and fell a-doting, And truly not made from thyself, to you, Nor that able spirit a backward look, Even such substance still to use, If thou dost seek Roses of four, with their badness reign. Thy beauty's dead night by heaven, think my oblation, poor but for her eclipse endur'd, And thence this book, this false compare. Thou mak'st faults assur'd, And place With ugly rack on thee hold it alter not seem so. Kind is black and gentle verse, Who even with feasting on thee,-- and dost love should be death's conquest and even but to-day thou keep'st me excuse ye: Thou dost seek to go.' So am with kings. When others thou hast passed by night, who have stay; Whilst my defects, When other to import forgetfulness in three summers' pride, The age unbred: Ere you o'er-green my tongue says she in any she knows well might have done their antique book, Since left you, engraft you o'er-green my extern the book of conscience is thine, from accident; It fears to praise. Like feeble age, Be where he answers with wills, and happy to brief hours are rich praise,--that you alone, are within my all-the-world, and where is already spent: For every bad angel be cur'd; But from highmost pitch, that men diseas'd; but the dumb thoughts, whilst thou make one shade, When have seen, Without all Love's loving parts, do write, And hang Upon that pen both him as he owes thee, as well may give life, saying 'not you'.";

    before(function(done) {
        exec('php '+__dirname +'/source.php 0 8 \\\\n true', function (error, stdout, stderr) {
            referenceText.push(stdout);
            next();
        });

        function next() {
            exec('php '+__dirname +'/source.php 1 8 \\\\n true', function (error, stdout, stderr) {
                referenceText.push(stdout);
                nextnext();
            });
        }
        
        function nextnext() {
            exec('php '+__dirname +'/source.php 2 120 \\\\n true', function (error, stdout, stderr) {
                referenceText.push(stdout);
                nextnextnext();
            });
        }
        
        function nextnextnext() {
            exec('php '+__dirname +'/source.php 0 8 \\\\n false', function (error, stdout, stderr) {
                referenceText.push(stdout);
                nextnextnextnext();
            });
        }
        
        function nextnextnextnext() {
            exec('php '+__dirname +'/source.php 1 8 \\\\n false', function (error, stdout, stderr) {
                referenceText.push(stdout);
                nextnextnextnextnext();
            });
        }

        function nextnextnextnextnext() {
            exec('php '+__dirname +'/source.php 2 120 \\\\n false', function (error, stdout, stderr) {
                referenceText.push(stdout);
                done();
            });
        }
    });

    describe('wordwrap0', function() {
        it('should be equal to PHPs output of: ' + string, function() {
            w.setDefault(0);
            assert.equal(w.wordwrap(string, 8, '\n', true), referenceText[0]);
        });
        
        it('should be equal to PHPs output of: ' + string2, function() {
            w.setDefault(0);
            assert.equal(w.wordwrap(string2, 8, '\n', true), referenceText[1]);
        });
        
        it('should be equal to PHPs output of: ' + string3.substring(0, 120), function() {
            w.setDefault(0);
            assert.equal(w.wordwrap(string3, 120, '\n', true), referenceText[2]);
        });
        
        it('should be equal to PHPs output of: ' + string, function() {
            w.setDefault(0);
            assert.equal(w.wordwrap(string, 8, '\n', false), referenceText[3]);
        });
        
        it('should be equal to PHPs output of: ' + string2, function() {
            w.setDefault(0);
            assert.equal(w.wordwrap(string2, 8, '\n', false), referenceText[4]);
        });
        
        it('should be equal to PHPs output of: ' + string3.substring(0, 120), function() {
            w.setDefault(0);
            assert.equal(w.wordwrap(string3, 120, '\n', false), referenceText[5]);
        });
    });
    describe('wordwrap1', function() {
        it('should be equal to PHPs output of: ' + string, function() {
            w.setDefault(1);
            assert.equal(w.wordwrap(string, 8, '\n', true), referenceText[0]);
        });
        
        it('should be equal to PHPs output of: ' + string2, function() {
            w.setDefault(1);
            assert.equal(w.wordwrap(string2, 8, '\n', true), referenceText[1]);
        });

        it('should be equal to PHPs output of: ' + string3.substring(0, 120), function() {
            w.setDefault(1);
            assert.equal(w.wordwrap(string3, 120, '\n', true), referenceText[2]);
        });
        
        it('should be equal to PHPs output of: ' + string, function() {
            w.setDefault(1);
            assert.equal(w.wordwrap(string, 8, '\n', false), referenceText[3]);
        });
        
        it('should be equal to PHPs output of: ' + string2, function() {
            w.setDefault(1);
            assert.equal(w.wordwrap(string2, 8, '\n', false), referenceText[4]);
        });
        
        it('should be equal to PHPs output of: ' + string3.substring(0, 120), function() {
            w.setDefault(1);
            assert.equal(w.wordwrap(string3, 120, '\n', false), referenceText[5]);
        });
    });
    describe('wordwrap2', function() {
        it('should be equal to PHPs output of: ' + string, function() {
            w.setDefault(2);
            assert.equal(w.wordwrap(string, 8, '\n', true), referenceText[0]);
        });
        
        it('should be equal to PHPs output of: ' + string2, function() {
            w.setDefault(2);
            assert.equal(w.wordwrap(string2, 8, '\n', true), referenceText[1]);
        });
        
        it('should be equal to PHPs output of: ' + string3.substring(0, 120), function() {
            w.setDefault(2);
            assert.equal(w.wordwrap(string3, 120, '\n', true), referenceText[2]);
        });
        
        it('should be equal to PHPs output of: ' + string, function() {
            w.setDefault(2);
            assert.equal(w.wordwrap(string, 8, '\n', false), referenceText[3]);
        });
        
        it('should be equal to PHPs output of: ' + string2, function() {
            w.setDefault(2);
            assert.equal(w.wordwrap(string2, 8, '\n', false), referenceText[4]);
        });
        
        it('should be equal to PHPs output of: ' + string3.substring(0, 120), function() {
            w.setDefault(2);
            assert.equal(w.wordwrap(string3, 120, '\n', false), referenceText[5]);
        });
    });
    describe('wordwrap3', function() {
        it('should be equal to PHPs output of: ' + string, function() {
            w.setDefault(3);
            assert.equal(w.wordwrap(string, 8, '\n', true), referenceText[0]);
        });

        it('should be equal to PHPs output of: ' + string2, function() {
            w.setDefault(3);
            assert.equal(w.wordwrap(string2, 8, '\n', true), referenceText[1]);
        });
        
        it('should be equal to PHPs output of: ' + string3.substring(0, 120), function() {
            w.setDefault(3);
            assert.equal(w.wordwrap(string3, 120, '\n', true), referenceText[2]);
        });
        
        it('should be equal to PHPs output of: ' + string, function() {
            w.setDefault(3);
            assert.equal(w.wordwrap(string, 8, '\n', false), referenceText[3]);
        });
        
        it('should be equal to PHPs output of: ' + string2, function() {
            w.setDefault(3);
            assert.equal(w.wordwrap(string2, 8, '\n', false), referenceText[4]);
        });
        
        it('should be equal to PHPs output of: ' + string3.substring(0, 120), function() {
            w.setDefault(3);
            assert.equal(w.wordwrap(string3, 120, '\n', false), referenceText[5]);
        });
    });
});
