export interface Tone {
    name: string;
    description: string;
    iconEmoji: string;
}
export declare const toneToString: (tone: Tone) => string;
export declare const stringToTone: (toneStr: string, description?: string, emoji?: string) => Tone | undefined;
