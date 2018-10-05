pragma solidity 0.4.25;


/**
  @title Partial Lock and Commit Reveal Voting scheme without using tokens
 */
contract BasicVoteReveal {
    struct Poll {
        string title;
        string description;
        string option1;
        string option2;
        uint option1Votes;
        uint option2Votes;
        uint commitEnding;
        uint revealEnding;
        mapping(bytes32 => bool) votes;
        mapping(bytes32 => bool) revealed;
    }

    Poll[] public polls;

    function getPollStrings(uint _pollID) 
    public
    view
    returns(
        string,
        string,
        string,
        string
    )
    {
        return (
            polls[_pollID].title,
            polls[_pollID].description,
            polls[_pollID].option1,
            polls[_pollID].option2
        );
    }

    function getPollData(uint _pollID) 
    public
    view
    returns(
        uint,
        uint,
        uint,
        uint
    )
    {
        return (
            polls[_pollID].option1Votes,
            polls[_pollID].option2Votes,
            polls[_pollID].commitEnding,
            polls[_pollID].revealEnding
        );
    }

    function setPoll(
        string _title,
        string _description,
        string _option1,
        string _option2,
        uint commitEnding,
        uint revealEnding
    ) public returns (uint) {
        Poll memory _poll = Poll({
            title: _title,
            description: _description,
            option1: _option1,
            option2: _option2,
            option1Votes: 0,
            option2Votes: 0,
            commitEnding: commitEnding,
            revealEnding: revealEnding
        });

        polls.push(_poll);
    }

    function getCommitHash(
        uint _pollNumber,
        uint _option
    ) public view returns (bytes32) {
        return keccak256(
            abi.encodePacked(
                msg.sender,
                _pollNumber,
                _option
            )
        );
    }

    function commitVote(
        uint _pollNumber,
        bytes32 _vote
    ) public returns (bool) {
        if (polls[_pollNumber].commitEnding > now) {
            polls[_pollNumber].votes[_vote] = true;
            return true;
        } else {
            return false;
        }
    }

    function revealVote(
        uint _pollNumber,
        bytes32 _vote,
        uint _option
    ) public returns (bool) {
        bytes32 _newVote = keccak256(
            abi.encodePacked(
                msg.sender,
                _pollNumber,
                _option
            )
        );
        require(_vote == _newVote);
        require(polls[_pollNumber].votes[_vote] == true);
        require(polls[_pollNumber].revealed[_vote] == false);

        if (_option == 1) {
            polls[_pollNumber].option1Votes += 1;
        } else {
            polls[_pollNumber].option2Votes += 1;
        }
        polls[_pollNumber].option1Votes;
    }
}
