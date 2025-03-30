import { ActionGroupNode } from "../nodes/ActionGroupNode";
export declare const ACTION_GROUP: {
    readonly SHELL: ActionGroupNode;
    readonly GAME: ActionGroupNode;
    readonly AGE_ANTIQUITY_CURRENT: ActionGroupNode;
    readonly AGE_ANTIQUITY_PERSIST: ActionGroupNode;
    readonly AGE_EXPLORATION_CURRENT: ActionGroupNode;
    readonly AGE_EXPLORATION_PERSIST: ActionGroupNode;
    readonly AGE_MODERN_CURRENT: ActionGroupNode;
    readonly AGE_MODERN_PERSIST: ActionGroupNode;
    /**
     * @deprecated Use AGE_ANTIQUITY_PERSIST directly instead. Preserved for backwards
     * compatibility and may be removed in a future release
     */
    readonly AGE_ANTIQUITY_EXIST: ActionGroupNode;
    /**
     * @deprecated Use AGE_EXPLORATION_PERSIST directly instead. Preserved for backwards
     * compatibility and may be removed in a future release
     */
    readonly AGE_EXPLORATION_EXIST: ActionGroupNode;
    /**
     * @deprecated Use AGE_MODERN_PERSIST directly instead. Preserved for backwards
     * compatibility and may be removed in a future release
     */
    readonly AGE_MODERN_EXIST: ActionGroupNode;
};
