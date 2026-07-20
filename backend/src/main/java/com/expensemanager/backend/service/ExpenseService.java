package com.expensemanager.backend.service;

import com.expensemanager.backend.entity.Expense;
import com.expensemanager.backend.repository.ExpenseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {

    private final ExpenseRepository repository;

    public ExpenseService(ExpenseRepository repository) {
        this.repository = repository;
    }

    public List<Expense> getAllExpenses() {
        return repository.findAll();
    }

    public Expense saveExpense(Expense expense) {
        return repository.save(expense);
    }

    public Expense getExpenseById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Expense updateExpense(Long id, Expense expense) {
        expense.setId(id);
        return repository.save(expense);
    }

    public void deleteExpense(Long id) {
        repository.deleteById(id);
    }
}