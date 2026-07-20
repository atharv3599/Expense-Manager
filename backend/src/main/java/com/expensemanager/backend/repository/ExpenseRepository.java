package com.expensemanager.backend.repository;

import com.expensemanager.backend.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository
        extends JpaRepository<Expense, Long> {
}