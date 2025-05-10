/*
 * @Author: Xiaorui Wang
 * @Email: xiaorui.wang@usi.ch
 * @Date: 2025-05-09 21:38:34
 * @LastEditors: Xiaorui Wang
 * @LastEditTime: 2025-05-10 21:23:33
 * @Description: 
 * 
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order, and each of their nodes contains a single digit. 
 * Add the two numbers and return the sum as a linked list. 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 * 
 * Copyright (c) 2025 by Xiaorui Wang, All Rights Reserved. 
 */


/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry: number = 0; // using a dummy variable to simplify logic
    let dummy: ListNode | null = new ListNode(0, null);
    let temp = dummy;
    while(l1 || l2) {
        let l1_v: number = 0;
        let l2_v: number = 0;
        if(l1) {
            l1_v = l1.val;
            l1 = l1.next;
        } else {
            l1_v = 0;
        }
        if(l2) {
            l2_v = l2.val;
            l2 = l2.next;
        } else {
            l2_v = 0;
        }

        let sum = l1_v + l2_v + carry;
        carry = sum > 9 ? 1 : 0;
        let node: ListNode | null = null;
        if(carry>0){
            node = new ListNode(sum%10, null);
        } else {
            node = new ListNode(sum, null);
        }
        temp.next = node;
        temp = node;
    }
    if(carry > 0) {
        temp.next = new ListNode(carry, null);
    }
    return dummy.next;
}


/*
misunderstand the order.
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let l1_array = new Array();
    let l2_array = new Array();
    while (l1) {
        l1_array.push(l1);
        l1 = l1.next;
    }
    while (l2) {
        l2_array.push(l2);
        l2 = l2.next;
    }
    let extral: number = 0;
    let sum_array = new Array();
    while(l1_array.length > 0 || l2_array.length > 0) {
        let sum;
        if(l1_array.length == 0) {
            l2 = l2_array.pop();
             sum = l2!.val + extral;
        }
        else if(l2_array.length == 0) {
            l1 = l1_array.pop();
             sum = l1!.val + extral;
        } else {
            l1 = l1_array.pop();
        l2 = l2_array.pop();

         sum = l1!.val + l2!.val + extral;
        }
        
        
        extral = sum >= 10 ? 1 : 0;
        let sumNode;
        if(extral>0){
            sumNode = new ListNode(sum%10, null);
        } else {
            sumNode = new ListNode(sum, null);
        }
        
        sum_array.push(sumNode);
    }
    if(extral == 1) {
        sum_array.push(new ListNode(1, null));
    }

    let sumList = null;
    while(sum_array.length > 0) {
        let node = sum_array.pop();
        node.next = sumList;
        sumList = node;
    }
    return sumList;
};
*/

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// let a_node_1 = new ListNode(9);
// let a_node_2 = new ListNode(9);
// let a_node_3 = new ListNode(9);
// let a_node_4 = new ListNode(9);
// let a_node_5 = new ListNode(9);
// let a_node_6 = new ListNode(9);
// let a_node_7 = new ListNode(9);

// a_node_1.next = a_node_2;
// a_node_2.next = a_node_3;
// a_node_3.next = a_node_4;
// a_node_4.next = a_node_5;
// a_node_5.next = a_node_6;
// a_node_6.next = a_node_7;


// let b_node_1 = new ListNode(9);
// let b_node_2 = new ListNode(9);
// let b_node_3 = new ListNode(9);
// let b_node_4 = new ListNode(9)
// b_node_1.next = b_node_2;
// b_node_2.next = b_node_3;
// b_node_3.next = b_node_4;

let a_node_1 = new ListNode(2);
let a_node_2 = new ListNode(4);
let a_node_3 = new ListNode(9);


a_node_3.next = a_node_2;
a_node_2.next = a_node_1;



let b_node_1 = new ListNode(5);
let b_node_2 = new ListNode(6);
let b_node_3 = new ListNode(4);
let b_node_4 = new ListNode(9)
b_node_4.next = b_node_3;
b_node_3.next = b_node_2;
b_node_2.next = b_node_1;

let sumNode = addTwoNumbers(a_node_3, b_node_4);

while(sumNode) {
    console.log(`sumNode:${sumNode.val}`);
    sumNode = sumNode.next;
}






// function getLastNum(l: ListNode | null): number | null {
//     if(!l) return null;
//     if (!l.next) {
//         return l.val;
//     }
//     return getLastNum(l.next);
// }

// function add(l1: ListNode, l2: ListNode, extral: number): [ListNode, number] {    
//     let node: ListNode | null = null;
//     let newExtral: number = 0;
//     if(l1.next && l2.next) {
//         [node, newExtral] = add(l1.next, l2.next, extral);
//         let sum = l1.val + l2.val + newExtral;
//         if (sum > 10) {
//             return [new ListNode(sum/10, node) , 1];
//         } else {
//             return [new ListNode(sum, node), 0];
//         }
//     }
//     if(!l1.next && l2.next) {
//         [node, newExtral] = add(l1, l2.next, extral);
//         let sum = l1.val + l2.val + newExtral;
//         if (sum > 10) {
//             return [new ListNode(sum/10, node) , 1];
//         } else {
//             return [new ListNode(sum, node), 0];
//         }
//     }
//     if(!l2.next && l1.next) {
//         [node, newExtral] = add(l1.next, l2, extral);
//         let sum = l1.val + l2.val + newExtral;
//         if (sum > 10) {
//             return [new ListNode(sum/10, node) , 1];
//         } else {
//             return [new ListNode(sum, node), 0];
//         }
//     }
//     let sum = l1.val + l2.val + extral;
//     if (sum > 10) {
//         return [new ListNode(sum/10, null) , 1];
//     } else {
//         return [new ListNode(sum, null), 0];
//     }
// };
/**
 * 
 * 
Input: l1 = [2,4,3], l2 = [6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

 */
// function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//     if(!l1) return l2;
//     if(!l2) return l1;
//     let sum = Infinity;
//     let extal: number = 0;
//     let result: ListNode | null = null;
//     while(sum != 0) {
//         [sum, extal] = add(l1, l2, extal);
//     }

//     return result;
// };