import {action, computed, observable} from "mobx";

export interface IGeneral {
    sticky: boolean;
    getSticky: boolean;
    setSticky(sticky:boolean): void;

    height: number;
    getHeight: number;
    setHeight(height:number): void;

    width: number;
    getWidth: number;
    setWidth(width:number): void;
}

export class General implements IGeneral {
    @observable sticky = false;

    @computed
    public get getSticky(): any {
        return this.sticky;
    }

    @action.bound
    public setSticky(sticky:boolean):void {
        this.sticky = sticky
    }

    @observable height = 0;

    @computed
    public get getHeight(): any {
        return this.height;
    }

    @action.bound
    public setHeight(height:number):void {
        this.height = height
    }
    @observable width = 0;

    @computed
    public get getWidth(): any {
        return this.width;
    }

    @action.bound
    public setWidth(width:number):void {
        this.width = width
    }
}