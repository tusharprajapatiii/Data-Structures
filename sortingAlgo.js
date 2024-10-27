
class sortingALgorithms{
    constructor(){
        this.arr = [3,5,1,2,8,5,4,0,8,1,12,4,9,14,26,22,34,14]
        this.n = this.arr.length
    }

    selectionSort(){
        for(let i= 0;i<this.n;i++){
            let minIndex = i
            for(let j=i+1;j<this.n;j++){
                if(this.arr[j]<this.arr[minIndex]){
                    minIndex = j
                }
            }
            let temp = this.arr[minIndex];
            this.arr[minIndex] = this.arr[i];
            this.arr[i] = temp;
        }
    }

    bubbleSort(){
        for(let i=this.n;i>0;i--){
            let isSwapped = false
            for(let j= 0;j<i-1;j++){
                if(this.arr[j]>this.arr[j+1]){
                    let temp = this.arr[j];
                    this.arr[j] = this.arr[j+1];
                    this.arr[j+1] = temp;
                    isSwapped = true
                }
            }
            if(!isSwapped) break
        }
    }

    insertionSort(){
        for(let i = 1; i<this.n;i++){
            let key = this.arr[i];
            let j = i- 1;
            while(j>=0 && this.arr[j]> key){
                this.arr[j+1] = this.arr[j];
                j--;
            }
            this.arr[j+1] = key;
        }
    }

    mergeSort(low,high){
        if(low>=high) return
        let mid = Math.floor((low+high)/2)
        this.mergeSort(low,mid)
        this.mergeSort(mid+1,high)
        this.merge(low,mid,high)

    }
    merge(low,mid,high){
        let left = low;
        let right = mid+1;
        const temp = [];
        while(left<=mid && right <= high){
            if(this.arr[left]<=this.arr[right]){
                temp.push(this.arr[left]);
                left++;   
            }else{
                temp.push(this.arr[right]);
                right++;
            }
        }
        while(left<=mid){
            temp.push(this.arr[left]);
            left++;
        }
        while(right<= high){
            temp.push(this.arr[right]);
            right++;
        }
        for(let i = low;i<=high;i++){
            this.arr[i] = temp[i-low]
        }   
    }

    quickSort(low,high){
        if(low<high){
            let pivotIndex = this.partition(low,high);
            this.quickSort(low,pivotIndex-1)
            this.quickSort(pivotIndex,high)
        }
    }

    partition(low,high){
        let pivot = this.arr[high];
        let i = low - 1;
        for(let j=low;j<high;j++){
            if(this.arr[j]<=pivot){
                i++;
                let temp = this.arr[j];
                this.arr[j] = this.arr[i];
                this.arr[i] = temp;
            }
        }
        let temp = this.arr[i+1];
        this.arr[i+1] = this.arr[high];
        this.arr[high] = temp;
        return i+1;
    }
}

const sortindMethods = new sortingALgorithms()
console.time('sort')
sortindMethods.quickSort(0,sortindMethods.n-1)
console.timeEnd('sort')
console.log(sortindMethods.arr)
