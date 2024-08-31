function skillsMember() {
    return{
        restrict: 'E',
        templateURL: 'modules/skills/view/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '...'

        }
    };

}