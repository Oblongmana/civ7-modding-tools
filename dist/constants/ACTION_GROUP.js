"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACTION_GROUP = void 0;
// fix for import loop
const ActionGroupNode_1 = require("../nodes/ActionGroupNode");
const CriteriaNode_1 = require("../nodes/CriteriaNode");
const AGE_1 = require("./AGE");
// NB: IDs on ActionGroups and CriteriaNodes for the ages are set to follow  Firaxis'
// conventions present the main game files in e.g. Base\modules\age-antiquity\age-antiquity.modinfo.
const ageAntiquityPersist = new ActionGroupNode_1.ActionGroupNode({
    id: `age-antiquity-persist`,
    scope: 'game',
    criteria: new CriteriaNode_1.CriteriaNode({
        id: `antiquity-age-persist`,
        ages: [AGE_1.AGE.ANTIQUITY, AGE_1.AGE.EXPLORATION, AGE_1.AGE.MODERN]
    })
});
const ageExplorationPersist = new ActionGroupNode_1.ActionGroupNode({
    id: `age-exploration-persist`,
    scope: 'game',
    criteria: new CriteriaNode_1.CriteriaNode({
        id: `exploration-age-persist`,
        ages: [AGE_1.AGE.EXPLORATION, AGE_1.AGE.MODERN]
    })
});
const ageModernPersist = new ActionGroupNode_1.ActionGroupNode({
    id: `age-modern-persist`,
    scope: 'game',
    criteria: new CriteriaNode_1.CriteriaNode({
        id: `modern-age-persist`,
        ages: [AGE_1.AGE.MODERN]
    })
});
exports.ACTION_GROUP = {
    SHELL: new ActionGroupNode_1.ActionGroupNode({
        scope: 'shell',
        criteria: new CriteriaNode_1.CriteriaNode({ id: 'always' })
    }),
    GAME: new ActionGroupNode_1.ActionGroupNode({
        scope: 'game',
        criteria: new CriteriaNode_1.CriteriaNode({ id: 'always' })
    }),
    AGE_ANTIQUITY_CURRENT: new ActionGroupNode_1.ActionGroupNode({
        id: `age-antiquity-current`,
        scope: 'game',
        criteria: new CriteriaNode_1.CriteriaNode({
            id: `antiquity-age-current`,
            ages: [AGE_1.AGE.ANTIQUITY]
        })
    }),
    AGE_ANTIQUITY_PERSIST: ageAntiquityPersist,
    AGE_EXPLORATION_CURRENT: new ActionGroupNode_1.ActionGroupNode({
        id: `age-exploration-current`,
        scope: 'game',
        criteria: new CriteriaNode_1.CriteriaNode({
            id: `exploration-age-current`,
            ages: [AGE_1.AGE.EXPLORATION]
        })
    }),
    AGE_EXPLORATION_PERSIST: ageExplorationPersist,
    AGE_MODERN_CURRENT: new ActionGroupNode_1.ActionGroupNode({
        id: `age-modern-current`,
        scope: 'game',
        criteria: new CriteriaNode_1.CriteriaNode({
            id: `modern-age-current`,
            ages: [AGE_1.AGE.MODERN]
        })
    }),
    AGE_MODERN_PERSIST: ageModernPersist,
    /**
     * @deprecated Use AGE_ANTIQUITY_PERSIST directly instead. Preserved for backwards
     * compatibility and may be removed in a future release
     */
    AGE_ANTIQUITY_EXIST: ageAntiquityPersist,
    /**
     * @deprecated Use AGE_EXPLORATION_PERSIST directly instead. Preserved for backwards
     * compatibility and may be removed in a future release
     */
    AGE_EXPLORATION_EXIST: ageExplorationPersist,
    /**
     * @deprecated Use AGE_MODERN_PERSIST directly instead. Preserved for backwards
     * compatibility and may be removed in a future release
     */
    AGE_MODERN_EXIST: ageModernPersist,
};
//# sourceMappingURL=ACTION_GROUP.js.map