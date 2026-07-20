package com.expensemanager.backend.controller;

import com.expensemanager.backend.entity.Expense;
import com.expensemanager.backend.service.ExpenseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins = "*")
public class ExpenseController {

    private final ExpenseService service;

    public ExpenseController(ExpenseService service) {
        this.service = service;
    }

    @GetMapping
    public List<Expense> getAllExpenses() {
        return service.getAllExpenses();
    }
@PostMapping
public Expense addExpense(@RequestBody Expense expense)
 {
    System.out.println("Title = " + expense.getTitle());
    System.out.println("Amount = " + expense.getAmount());
    System.out.println("Category = " + expense.getCategory());
    System.out.println("Date = " + expense.getExpenseDate());

    return service.saveExpense(expense);
} 


    @GetMapping("/{id}")
    public Expense getExpenseById(@PathVariable Long id) {
        return service.getExpenseById(id);
    }

    @PutMapping("/{id}")
    public Expense updateExpense(@PathVariable Long id,
                                 @RequestBody Expense expense) {
        return service.updateExpense(id, expense);
    }

    @DeleteMapping("/{id}")
    public void deleteExpense(@PathVariable Long id) {
        service.deleteExpense(id);
    }
}