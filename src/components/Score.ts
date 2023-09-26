import { BaseComponent, RawComponent } from "./Base";

export interface IScore {
    name: string;
    objective: string;
    value?: string;
}

export type RawScoreComponent = RawComponent<Pick<ScoreComponent, "score">>;

export class ScoreComponent extends BaseComponent {

    score: IScore = {
        name: "",
        objective: ""
    };

    constructor(component?: ScoreComponent | RawScoreComponent | string) {
        super();

        this.setup(component);
    }

    /**
     * Set name for component
     *
     * @param name - Name
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.wiki/w/Raw_JSON_text_format#Scoreboard_Value | Scoreboard Value}
     */
    setName(name: IScore["name"] = ""): this {
        this.score.name = name;

        return this;
    }

    /**
     * Set objective for component
     *
     * @param objective - Objective
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.wiki/w/Raw_JSON_text_format#Scoreboard_Value | Scoreboard Value}
     */
    setObjective(objective: IScore["objective"] = ""): this {
        this.score.objective = objective;

        return this;
    }

    /**
     * Set value for component
     *
     * @param value - Value
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.wiki/w/Raw_JSON_text_format#Scoreboard_Value | Scoreboard Value}
     */
    setValue(value?: IScore["value"]): this {
        this.score.value = value;

        return this;
    }

    /**
     * Get component name status
     *
     * @return Component name status
     */
    hasName(): boolean {
        return Boolean(this.score.name);
    }

    /**
     * Get component objective status
     *
     * @return Component objective status
     */
    hasObjective(): boolean {
        return Boolean(this.score.objective);
    }

    /**
     * Get component value status
     *
     * @return Component value status
     */
    hasValue(): boolean {
        return Boolean(this.score.value);
    }
}

/**
 * ScoreComponent Fabric
 *
 * @param name - Name
 * @param objective - Objective
 * @param value - Value
 *
 * @return ScoreComponent
 *
 * @see {@link https://minecraft.wiki/w/Raw_JSON_text_format#Scoreboard_Value | Scoreboard Value}
 */
export function score(name: IScore["name"], objective: IScore["objective"], value?: IScore["value"]): ScoreComponent {
    return new ScoreComponent({
        score: {
            name,
            objective,
            value
        }
    });
}
